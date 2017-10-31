import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UExercise } from './models/uexercise';
import { UTask } from './models/utask';
import { UPupil } from './models/upupil';
import { UScheduleItem } from './models/uscheduleitem';

@Component({
    moduleId: module.id,
    selector: 'exercise',
    templateUrl: './exercise-detail.component.html'
})
export class ExerciseDetailComponent implements OnInit {
    isLogin = false;

    selectTasks: boolean = false;
    selectPupils: boolean = false;
    selectSchedule: boolean = false;

    tasks: UTask[] = [
        { id: 1, name: 'Task 1', isSelected: false },
        { id: 2, name: 'Task 2', isSelected: false },
        { id: 3, name: 'Task 3', isSelected: false },
        { id: 4, name: 'Task 4', isSelected: false },
        { id: 5, name: 'Task 5', isSelected: false },
        { id: 6, name: 'Task 6', isSelected: false },
        { id: 7, name: 'Task 7', isSelected: false }
    ];

    pupils: UPupil[] = [
        { id: 1, name: 'Pupil 1', isSelected: false  },
        { id: 2, name: 'Pupil 2', isSelected: false  },
        { id: 3, name: 'Pupil 3', isSelected: false  },
        { id: 4, name: 'Pupil 4', isSelected: false  },
        { id: 5, name: 'Pupil 5', isSelected: false  },
        { id: 6, name: 'Pupil 6', isSelected: false  },
        { id: 7, name: 'Pupil 7', isSelected: false  }
    ];

    schedule: UScheduleItem[] = [
        { id: 1, day: new Date('1/1/16'), isSelected: false },
        { id: 2, day: new Date('1/2/16'), isSelected: false },
        { id: 3, day: new Date('1/3/16'), isSelected: false },
        { id: 4, day: new Date('1/4/16'), isSelected: false },
        { id: 5, day: new Date('1/5/16'), isSelected: false },
        { id: 6, day: new Date('1/6/16'), isSelected: false },
        { id: 7, day: new Date('1/7/16'), isSelected: false }
    ];

    selectedTasks: UTask[] = [];
    selectedPupils: UPupil[] = [];
    selectedSchedule: UScheduleItem[] = [];
    newExercise: UExercise;

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    onSelectTasks(): void {
        this.selectTasks = true;
        this.selectPupils = false;
        this.selectSchedule = false;
    }

    onSelectPupils(): void {
        this.selectTasks = false;
        this.selectPupils = true;
        this.selectSchedule = false;
    }

    onSelectSchedule(): void {
        this.selectTasks = false;
        this.selectPupils = false;
        this.selectSchedule = true;
    }

    onOK(): void {
        this.newExercise = new UExercise();
        this.newExercise.pupilList = this.selectedPupils;
        this.newExercise.taskList = this.selectedTasks;
        this.newExercise.scheduleItemList = this.selectedSchedule;
    }

    onSelectTask(task: UTask): void {
        var a = this.selectedTasks.find(si => si.id === task.id);
        if (a != undefined) {
            var b = this.selectedTasks.indexOf(a);
            this.selectedTasks.splice(b, 1);
            task.isSelected = false;
        }
        else {
            this.selectedTasks.push(task);
            task.isSelected = true;
        }
    }

    onSelectPupil(pupil: UPupil): void {

        var a = this.selectedPupils.find(si => si.id === pupil.id);
        if (a != undefined) {
            var b = this.selectedPupils.indexOf(a);
            this.selectedPupils.splice(b, 1);
            pupil.isSelected = false;
        }
        else {
            this.selectedPupils.push(pupil);
            pupil.isSelected = true;
        }
    }

    onSelectDate(scheduleItem: UScheduleItem): void {
        var a = this.selectedSchedule.find(si => si.id === scheduleItem.id);
        if (a != undefined) {
            var b = this.selectedSchedule.indexOf(a);
            this.selectedSchedule.splice(b, 1);
            scheduleItem.isSelected = false;
        }
        else {
            this.selectedSchedule.push(scheduleItem);
            scheduleItem.isSelected = true;
        }
    }
}