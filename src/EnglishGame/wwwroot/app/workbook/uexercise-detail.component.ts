import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'teacher',
    templateUrl: './teacher-area.component.html'
})
export class TeacherAreaComponent implements OnInit {
    isLogin = false;

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
    }
}