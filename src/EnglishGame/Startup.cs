using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using EnglishGame.Auth;
using EnglishGame.Models;
using Microsoft.EntityFrameworkCore;
using EnglishGame.Data;
using Microsoft.AspNetCore.Identity;

using EnglishGame.Data.Repositories;
using EnglishGame.Data.Abstract;
using EnglishGame.Core.Mappings;
using Newtonsoft.Json.Serialization;
using RecurrentTasks;
using EnglishGame.Core;
using EnglishGame.Hubs;

namespace EnglishGame
{
    public class Startup
    {
        public static string API_URL = string.Empty;
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsEnvironment("Development"))
            {
                // This will push telemetry data through Application Insights pipeline faster, allowing you to view results immediately.
                builder.AddApplicationInsightsSettings(developerMode: true);
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();

            API_URL = Configuration["apiURL"];
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddApplicationInsightsTelemetry(Configuration);

            // Enable the use of an [Authorize("Bearer")] attribute on methods and classes to protect.
            services.AddAuthorization(auth =>
            {
                auth.AddPolicy("Bearer", new AuthorizationPolicyBuilder()
                    .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme‌​)
                    .RequireAuthenticatedUser().Build());
            });

            /*services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));*/
            services.AddDbContext<ApplicationDbContext>(options => options.UseInMemoryDatabase());

            services.AddIdentity<UUser, IdentityRole>(options =>
            {
                options.Password.RequireDigit = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequiredLength = 1;
                options.User.AllowedUserNameCharacters = null;
            }
            )
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddMvc();

            services.AddAuthentication(/*o =>
            {
                o.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                o.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }*/).AddJwtBearer(o =>
            {
                /*o.Authority = "https://localhost:5000";
                o.Audience = "your-api-id";
                o.RequireHttpsMetadata = false;*/
                o.TokenValidationParameters = new TokenValidationParameters()
                {
                    IssuerSigningKey = TokenAuthOption.Key,
                    ValidAudience = TokenAuthOption.Audience,
                    ValidIssuer = TokenAuthOption.Issuer,
                    // When receiving a token, check that we've signed it.
                    ValidateIssuerSigningKey = true,
                    // When receiving a token, check that it is still valid.
                    ValidateLifetime = true,
                    // This defines the maximum allowable clock skew - i.e. provides a tolerance on the token expiry time 
                    // when validating the lifetime. As we're creating the tokens locally and validating them on the same 
                    // machines which should have synchronised time, this can be set to zero. Where external tokens are
                    // used, some leeway here could be useful.
                    ClockSkew = TimeSpan.FromMinutes(0)
                };
            });

            //----------------------------
            services.AddDbContext<LiveGameContext>(options => options.UseInMemoryDatabase());
            // Repositories
            services.AddScoped<IMatchRepository, MatchRepository>();
            services.AddScoped<IFeedRepository, FeedRepository>();

            // Automapper Configuration
            AutoMapperConfiguration.Configure();

            // Add framework services.
            services
                .AddMvc()
                .AddJsonOptions(options => options.SerializerSettings.ContractResolver =
                    new DefaultContractResolver());

            services.AddSignalR();

            services.AddTask<FeedEngine>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            #region Handle Exception

            app.UseExceptionHandler(appBuilder =>
            {
                appBuilder.Use(async (context, next) =>
                {
                    var error = context.Features[typeof(IExceptionHandlerFeature)] as IExceptionHandlerFeature;

                    //when authorization has failed, should retrun a json message to client
                    if (error != null && error.Error is SecurityTokenExpiredException)
                    {
                        context.Response.StatusCode = 401;
                        context.Response.ContentType = "application/json";

                        await context.Response.WriteAsync(JsonConvert.SerializeObject(new RequestResult
                        {
                            State = RequestState.NotAuth,
                            Msg = "token expired"
                        }));
                    }
                    //when orther error, retrun a error message json to client
                    else if (error != null && error.Error != null)
                    {
                        context.Response.StatusCode = 500;
                        context.Response.ContentType = "application/json";
                        await context.Response.WriteAsync(JsonConvert.SerializeObject(new RequestResult
                        {
                            State = RequestState.Failed,
                            Msg = error.Error.Message
                        }));
                    }
                    //when no error, do next.
                    else await next();
                });
            });
            #endregion

            app.UseIdentity();
            app.Use(async (context, next) =>
            {
                await next();

                if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            })
            .UseDefaultFiles()
            .UseStaticFiles()
            .UseMvc();

            app.UseCors(
                builder => builder.AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials())
                .UseStaticFiles()
                .UseWebSockets();

            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc(routes => { });
            app.UseSignalR(routes => {
                routes.MapHub<Broadcastert>("broadcastert");
            });


            LiveGameDbInitializer.Initialize(app.ApplicationServices);

            app.StartTask<FeedEngine>(TimeSpan.FromSeconds(15));

            ApplicationDbContext.Initialize(app.ApplicationServices);

            if (env.IsDevelopment())
            {
                ServeFromDirectory(app, env, "node_modules");
            }
        }

        public void ServeFromDirectory(IApplicationBuilder app, IHostingEnvironment env, string path)
        {
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(
                    Path.Combine(env.ContentRootPath, path)
                ),
                RequestPath = "/" + path
            });
        }
    }
}