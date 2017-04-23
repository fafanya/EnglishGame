using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using EnglishGame.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using EnglishGame.Controllers;
using Microsoft.AspNetCore.Identity;

namespace EnglishGame.Data
{
    public class ApplicationDbContext : IdentityDbContext<UUser>
    {
        //public DbSet<UDebt> UDebts { get; set; }
        //public DbSet<UBill> UBills { get; set; }
        public DbSet<UUser> UUsers { get; set; }
        public DbSet<UDuel> UDuels { get; set; }
        public DbSet<URound> URounds { get; set; }
        public DbSet<UWeight> UWeights { get; set; }
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

        public static async void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = serviceProvider.GetService<ApplicationDbContext>())
            {
                try
                {
                    if (context.UUsers != null)
                    {
                        if (!context.UUsers.Any())
                        {
                            UserManager<UUser> um = serviceProvider.GetService(typeof(UserManager<UUser>))
                                as UserManager<UUser>;
                            var primaryUser = new UUser { UserName = "lul@lul.lul", Email = "lul@lul.lul" };
                            var result = await um.CreateAsync(primaryUser, "lul");
                            var secondaryUser = new UUser { UserName = "lol@lol.lol", Email = "lol@lol.lol" };
                            result = await um.CreateAsync(secondaryUser, "lol");

                            /*UDuel duel = new UDuel()
                            {
                                PrimaryPlayerId = primaryUser.Id,
                                SecondaryPlayerId = secondaryUser.Id
                            };
                            context.UDuels.Add(duel);
                            context.SaveChanges();

                            URound round = new URound()
                            {
                                UDuelId = duel.Id,
                                Question = "2+2",
                                LeftVariant = "7",
                                RightVariant = "4"
                            };
                            context.URounds.Add(round);
                            round = new URound()
                            {
                                UDuelId = duel.Id,
                                Question = "2+4",
                                LeftVariant = "6",
                                RightVariant = "4"
                            };
                            context.URounds.Add(round);
                            context.SaveChanges();*/
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
