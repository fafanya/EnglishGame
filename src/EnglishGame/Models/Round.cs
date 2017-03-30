using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishGame.Models
{
    public class Round
    {
        public int id { get; set; }
        public string question { get; set; }
        public string leftVariant { get; set; }
        public string rightVariant { get; set; }
    }
}
