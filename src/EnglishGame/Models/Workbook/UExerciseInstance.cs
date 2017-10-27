using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnglishGame.Models.Workbook
{
    public class UExerciseInstance
    {
        public UPupil Pupil;
        public UExercise Exercise;
        public UExerciseMark Mark;
        public List<UTaskInstance> TaskInstances;
    }
}