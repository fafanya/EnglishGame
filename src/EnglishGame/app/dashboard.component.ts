import { Component, OnInit } from '@angular/core';

import { Issue } from './issue';
import { IssueService } from './issue.service';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: '../html/dashboard.component.html',
    styleUrls: ['../html/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    issues: Issue[] = [];
    constructor(private issueService: IssueService) { }

    ngOnInit(): void {
        this.issueService.getIssues().then(issues => this.issues = issues.slice(1, 5));
    }
}