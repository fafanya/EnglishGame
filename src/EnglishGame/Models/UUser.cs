using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace EnglishGame.Models
{
    public class UUser : IdentityUser
    {
        public string Password { get; set; }

        [InverseProperty("PrimaryPlayer")]
        public List<UDuel> PrimaryPlayerUDuels { get; set; }

        [InverseProperty("SecondaryPlayer")]
        public List<UDuel> SecondaryPlayerUDuels { get; set; }

        public UWeight UWeight { get; set; }
    }
}