import { Issue } from './issue';
import { ISSUES } from './mock-issues';
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class IssueService {

    constructor(private http: Http) { }

    private issuesUrl = 'api/Issues';

    getIssues(): Promise<Issue[]> {
        /*return this.http.get(this.issuesUrl)
            .toPromise()
            .then((response) => { return this.getResponse(response); })
            .catch(this.handleError);*/
        return Promise.resolve(ISSUES);
    }

    getIssue(id: number): Promise<Issue> {
        return this.getIssues()
            .then(issues => issues.find(issue => issue.id === id));
    }

    private getResponse(response: Response): Issue[] {
        return response.json() as Issue[];
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}