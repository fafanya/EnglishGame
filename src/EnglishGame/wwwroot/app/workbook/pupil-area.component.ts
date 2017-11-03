import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UExercise } from './models/uexercise';

import { WorkbookService } from './services/workbook.service';

@Component({
    moduleId: module.id,
    selector: 'pupil',
    templateUrl: './pupil-area.component.html'
})
export class PupilAreaComponent implements OnInit {
    isLogin = false;

    private exerciseAmount: number;

    exercises: UExercise[] = [];

    constructor(
        private router: Router,
        private workbookService: WorkbookService
    ) {
        workbookService.getExerciseList().then(exercises => {
            this.exercises = exercises;
        });
    }

    ngOnInit(): void {
    }
}