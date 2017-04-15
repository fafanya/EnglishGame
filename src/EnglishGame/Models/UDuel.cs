using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace EnglishGame.Models
{
    public class UDuel
    {
        public int Id { get; set; }

        public string PrimaryPlayerId { get; set; }
        public UUser PrimaryPlayer { get; set; }

        public string SecondaryPlayerId { get; set; }
        public UUser SecondaryPlayer { get; set; }

        public string Summary { get; set; }

        public List<URound> URounds { get; set; }
    }
}
