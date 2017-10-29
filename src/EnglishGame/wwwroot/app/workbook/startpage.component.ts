import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'startpage',
    templateUrl: './startpage.component.html'
})
export class StartPageComponent implements OnInit {
    isLogin = false;

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
    }
}