import { Component } from '@angular/core';
import { Issue } from './issue';
import { IssueService } from './issue.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'issues',
    templateUrl: './issues.component.html',
    styleUrls: ['./issues.component.css'],
    providers: [IssueService]
})
export class IssuesComponent implements OnInit {
    title = 'Tracker of Issues';
    selectedIssue: Issue;
    issues: Issue[];

    constructor(
        private issueService: IssueService,
        private router: Router) { }

    onSelect(issue: Issue): void {
        this.selectedIssue = issue;
    }
    getIssues(): void {
        this.issueService.getIssues().then(issues => this.issues = issues);
    }
    ngOnInit(): void {
        this.getIssues();
    }
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedIssue.id]);
    }
}