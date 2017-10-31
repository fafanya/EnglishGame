using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishGame.Models.Workbook
{
    public class UExercise
    {
        public int Id;
        public string Name;
        public UTeacher Teacher;
        public List<UTask> Tasks;
    }
}
