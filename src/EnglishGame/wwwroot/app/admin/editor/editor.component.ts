import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'editor',
    templateUrl: './editor.component.html',
    styleUrls: ["./editor.component.css"]
})
export class AdminComponent implements OnInit {

    constructor(
        private router: Router) { }

    ngOnInit(): void {

    }
}