import { UTask } from './utask';
import { UPupil } from './upupil';
import { UTeacher } from './uteacher';
import { UScheduleItem } from './uscheduleitem';

export class UExercise {
    id: number;
    name: string;
    teacher_id: number;
    taskList: UTask[];
    pupilList: UPupil[];
    scheduleItemList: UScheduleItem[];
    teacher: UTeacher;
}