using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EnglishGame.Auth;
using System.IdentityModel.Tokens.Jwt;
using Newtonsoft.Json;
using System.Security.Claims;
using System.Security.Principal;
using Microsoft.IdentityModel.Tokens;
using EnglishGame.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using System.Runtime.Serialization;
using EnglishGame.Data;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace EnglishGame.Controllers
{
    [Route("api/[controller]")]
    public class TokenAuthController : Controller
    {
        private readonly ApplicationDbContext m_Context;
        private readonly UserManager<UUser> m_UserManager;
        private readonly SignInManager<UUser> m_SignInManager;

        public TokenAuthController(ApplicationDbContext context, UserManager<UUser> userManager,
            SignInManager<UUser> signInManager)
        {
            m_Context = context;
            m_UserManager = userManager;
            m_SignInManager = signInManager;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody]UUser user)
        {
            if (ModelState.IsValid)
            {
                var uUser = new UUser { UserName = user.Email, Email = user.Email };
                var result = await m_UserManager.CreateAsync(uUser, user.Password);
                if (result.Succeeded)
                {
                    if (ModelState.IsValid)
                    {
                        var resultI = await m_SignInManager.PasswordSignInAsync(user.Email, user.Password, isPersistent: true, lockoutOnFailure: false);
                        if (resultI.Succeeded)
                        {
                            var existUser = m_UserManager.GetUserAsync(HttpContext.User).Result;

                            if (existUser != null)
                            {
                                var requestAt = DateTime.Now;
                                var expiresIn = requestAt + TokenAuthOption.ExpiresSpan;
                                var token = GenerateToken(existUser, expiresIn);

                                return
                                    Ok(
                                    JsonConvert.SerializeObject(new RequestResult
                                    {
                                        State = RequestState.Success,
                                        Data = new
                                        {
                                            requertAt = requestAt,
                                            expiresIn = TokenAuthOption.ExpiresSpan.TotalSeconds,
                                            tokeyType = TokenAuthOption.TokenType,
                                            accessToken = token
                                        }
                                    })
                                );
                            }
                            else
                            {
                                return Ok(JsonConvert.SerializeObject(new RequestResult
                                {
                                    State = RequestState.Failed,
                                    Msg = "Username or password is invalid"
                                }));
                            }
                        }
                    }
                    return Ok(JsonConvert.SerializeObject(new RequestResult
                    {
                        State = RequestState.Failed,
                        Msg = "Username or password is invalid"
                    }));
                }
            }
            return Ok(false);
        }

        [HttpPost]
        public async Task<IActionResult> GetAuthToken([FromBody]UUser user)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var result = await m_SignInManager.PasswordSignInAsync(user.Email, user.Password, isPersistent: true, lockoutOnFailure: false);
                    if (result.Succeeded)
                    {
                        //var existUser = await m_UserManager.GetUserAsync(HttpContext.User);
                        UUser existUser = m_Context.UUsers.SingleOrDefault(x => x.Email == user.Email);
                        if (existUser != null)
                        {
                            var requestAt = DateTime.Now;
                            var expiresIn = requestAt + TokenAuthOption.ExpiresSpan;
                            var token = GenerateToken(existUser, expiresIn);

                            return
                                Ok(
                                JsonConvert.SerializeObject(new RequestResult
                                {
                                    State = RequestState.Success,
                                    Data = new
                                    {
                                        requertAt = requestAt,
                                        expiresIn = TokenAuthOption.ExpiresSpan.TotalSeconds,
                                        tokeyType = TokenAuthOption.TokenType,
                                        accessToken = token
                                    }
                                })
                            );
                        }
                        else
                        {
                            return Ok(JsonConvert.SerializeObject(new RequestResult
                            {
                                State = RequestState.Failed,
                                Msg = "Username or password is invalid"
                            }));
                        }
                    }
                }
                catch (Exception e)
                {
                    var ex = e;
                }
            }
            return Ok(JsonConvert.SerializeObject(new RequestResult
            {
                State = RequestState.Failed,
                Msg = "Username or password is invalid"
            }));
        }

        private string GenerateToken(UUser user, DateTime expires)
        {
            var handler = new JwtSecurityTokenHandler();

            ClaimsIdentity identity = new ClaimsIdentity(
                new GenericIdentity(user.UserName, "TokenAuth"),
                new[] {
                    new Claim("ID", user.Id)
                }
            );

            var securityToken = handler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = TokenAuthOption.Issuer,
                Audience = TokenAuthOption.Audience,
                SigningCredentials = TokenAuthOption.SigningCredentials,
                Subject = identity,
                Expires = expires
            });
            return handler.WriteToken(securityToken);
        }

        [HttpGet]
        [Authorize("Bearer")]
        public string GetUserInfo()
        {
            var claimsIdentity = User.Identity as ClaimsIdentity;

            return JsonConvert.SerializeObject(new RequestResult
            {
                State = RequestState.Success,
                Data = new
                {
                    UserName = claimsIdentity.Name
                }
            });
        }
    }

    public static class UserStorage
    {
        public static List<UUser> Users { get; set; } = new List<UUser> {
            new UUser {Id="1",UserName="user1",Password = "user1psd" },
            new UUser {Id="2",UserName="user2",Password = "user2psd" },
            new UUser {Id="3",UserName="user3",Password = "user3psd" }
        };
    }
}
