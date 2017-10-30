import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UExercise } from './models/uexercise';
import { UTask } from './models/utask';

@Component({
    moduleId: module.id,
    selector: 'exercise',
    templateUrl: './exercise-detail.component.html'
})
export class ExerciseDetailComponent implements OnInit {
    isLogin = false;

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    onSelectTasks(): void {
    }

    onSelectPupils(): void {
    }

    onSelectSchedule(): void {
    }
}