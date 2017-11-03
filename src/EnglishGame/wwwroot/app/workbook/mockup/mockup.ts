import { UExercise } from '../models/uexercise';
import { UTask } from '../models/utask';
import { UPupil } from '../models/upupil';
import { UScheduleItem } from '../models/uscheduleitem';

export class MockUp {
    static tasks: UTask[] = [
        { id: 1, name: 'Task 1', isSelected: false },
        { id: 2, name: 'Task 2', isSelected: false },
        { id: 3, name: 'Task 3', isSelected: false },
        { id: 4, name: 'Task 4', isSelected: false },
        { id: 5, name: 'Task 5', isSelected: false },
        { id: 6, name: 'Task 6', isSelected: false },
        { id: 7, name: 'Task 7', isSelected: false }
    ];

    static pupils: UPupil[] = [
        { id: 1, name: 'Pupil 1', isSelected: false },
        { id: 2, name: 'Pupil 2', isSelected: false },
        { id: 3, name: 'Pupil 3', isSelected: false },
        { id: 4, name: 'Pupil 4', isSelected: false },
        { id: 5, name: 'Pupil 5', isSelected: false },
        { id: 6, name: 'Pupil 6', isSelected: false },
        { id: 7, name: 'Pupil 7', isSelected: false }
    ];

    static schedule: UScheduleItem[] = [
        { id: 1, day: new Date('1/1/16'), isSelected: false },
        { id: 2, day: new Date('1/2/16'), isSelected: false },
        { id: 3, day: new Date('1/3/16'), isSelected: false },
        { id: 4, day: new Date('1/4/16'), isSelected: false },
        { id: 5, day: new Date('1/5/16'), isSelected: false },
        { id: 6, day: new Date('1/6/16'), isSelected: false },
        { id: 7, day: new Date('1/7/16'), isSelected: false }
    ];

    static exercises: UExercise[] = [
        {
            id: 1, name: 'Exercise 1', teacher_id: 1, taskList: null,
            pupilList: null, scheduleItemList: null, teacher: null
        }
    ];
}