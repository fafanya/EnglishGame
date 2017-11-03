import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UExercise } from './models/uexercise';

@Component({
    moduleId: module.id,
    selector: 'pupil',
    templateUrl: './pupil-area.component.html'
})
export class PupilAreaComponent implements OnInit {
    isLogin = false;

    private exerciseAmount: number;

    exercises: UExercise[] = [
        {
            id: 1, name: 'Exercise 1', teacher_id: 1, taskList: null,
            pupilList: null, scheduleItemList: null, teacher: null
        }
    ];

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
    }
}