import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UExercise } from './models/uexercise';
import { UTask } from './models/utask';
import { UPupil } from './models/upupil';
import { UScheduleItem } from './models/uscheduleitem';
import { WorkbookService } from './services/workbook.service';

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

    tasks: UTask[] = [];
    pupils: UPupil[] = [];
    schedule: UScheduleItem[] = [];

    selectedTasks: UTask[] = [];
    selectedPupils: UPupil[] = [];
    selectedSchedule: UScheduleItem[] = [];
    newExercise: UExercise;

    constructor(
        private router: Router,
        private workbookService: WorkbookService
    ) {}

    ngOnInit(): void {
        this.workbookService.getTaskList().then(
            tasks => {
                this.tasks = tasks;
            });
        this.workbookService.getPupilList().then(
            pupils => {
                this.pupils = pupils;
            });
        this.workbookService.getScheduleItemList().then(
            scheduleItems => {
                this.schedule = scheduleItems;
            });
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