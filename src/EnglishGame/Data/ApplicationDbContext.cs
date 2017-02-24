using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using EnglishGame.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using EnglishGame.Controllers;

namespace EnglishGame.Data
{
    public class ApplicationDbContext : IdentityDbContext<UUser>
    {
        //public DbSet<UDebt> UDebts { get; set; }
        //public DbSet<UBill> UBills { get; set; }
        public DbSet<UUser> UUsers { get; set; }
        //public DbSet<UGroup> UGroups { get; set; }
        //public DbSet<UEvent> UEvents { get; set; }
        //public DbSet<UMember> UMembers { get; set; }
        //public DbSet<UPayment> UPayments { get; set; }
        //public DbSet<UEventType> UEventTypes { get; set; }
        
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = serviceProvider.GetService<ApplicationDbContext>())
            {
                try
                {
                    if (context.UUsers != null)
                    {
                        if (!context.UUsers.Any())
                        {
                            var uUser = new UUser();
                            uUser.UserName = "lol@lol.lol";
                            uUser.Email = "lol@lol.lol";
                            uUser.Password = "lol";

                            context.UUsers.Add(uUser);
                            context.SaveChanges();
                        }
                    }
                }
                catch(Exception ex)
                {
                    var e = ex;
                }
            }
        }
    }
}
