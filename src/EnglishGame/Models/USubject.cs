using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishGame.Models
{
    public class USubject
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<UDuel> UDuels { get; set; }
    }
}