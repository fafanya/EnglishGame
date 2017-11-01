import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'pupil',
    templateUrl: './pupil-area.component.html'
})
export class PupilAreaComponent implements OnInit {
    isLogin = false;

    private exerciseAmount: number;

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
    }
}