using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishGame.Models
{
    public class UWeight
    {
        public int Id { get; set; }

        public string UUserId { get; set; }
        public UUser UUser { get; set; }

        public double Sum { get; set; }
        public double Sub { get; set; }
        public double Mult { get; set; }
        public double Div { get; set; }

        public double[] GetWeights()
        {
            return new double[] { Sum, Sub, Mult, Div };
        }
    }
}
