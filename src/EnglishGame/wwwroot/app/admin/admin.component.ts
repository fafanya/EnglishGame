import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'admin',
    templateUrl: './admin.component.html',
    styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {

    constructor(
        private router: Router) { }

    ngOnInit(): void {

    }
}