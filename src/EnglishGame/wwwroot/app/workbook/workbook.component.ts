import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: './workbook.component.html'
})
export class WorkbookComponent {
    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        this.router.navigate(["./startpage"]);
    }
}
