﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace EnglishGame.Models
{
    [NotMapped]
    public class RequestResult
    {
        public RequestState State { get; set; }
        public string Msg { get; set; }
        public object Data { get; set; }
    }

    public enum RequestState
    {
        Failed = -1,
        NotAuth = 0,
        Success = 1
    }
}
