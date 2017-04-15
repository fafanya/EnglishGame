using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishGame.Models
{
    public class URound
    {
        public int Id { get; set; }
        public int Index { get; set; }
        public string Question { get; set; }
        public string LeftVariant { get; set; }
        public string RightVariant { get; set; }

        public string PrimaryAnswer { get; set; }
        public string SecondaryAnswer { get; set; }

        public int UDuelId { get; set; }
    }
}
