import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { IssueService } from './issue.service';

import { Issue } from './issue';

@Component({
    selector: 'issue-detail',
    templateUrl: '../html/issue-detail.component.html',
    styleUrls: ['../html/issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private issueService: IssueService) { }

    @Input()
    issue: Issue;

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.issueService.getIssue(id)
                .then(issue => this.issue = issue);
        });
    }

    goBack(): void {
        this.location.back();
    }
}