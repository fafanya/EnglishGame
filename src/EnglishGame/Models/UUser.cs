using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace EnglishGame.Models
{
    public class UUser : IdentityUser
    {
        public string Password { get; set; }
    }
}