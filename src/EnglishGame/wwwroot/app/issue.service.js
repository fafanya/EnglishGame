"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var mock_issues_1 = require('./mock-issues');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/add/operator/toPromise');
var IssueService = (function () {
    function IssueService(http) {
        this.http = http;
        this.issuesUrl = 'api/Issues';
    }
    IssueService.prototype.getIssues = function () {
        /*return this.http.get(this.issuesUrl)
            .toPromise()
            .then((response) => { return this.getResponse(response); })
            .catch(this.handleError);*/
        return Promise.resolve(mock_issues_1.ISSUES);
    };
    IssueService.prototype.getIssue = function (id) {
        return this.getIssues()
            .then(function (issues) { return issues.find(function (issue) { return issue.id === id; }); });
    };
    IssueService.prototype.getResponse = function (response) {
        return response.json();
    };
    IssueService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    IssueService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], IssueService);
    return IssueService;
}());
exports.IssueService = IssueService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNzdWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9pc3N1ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSw0QkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMscUJBQXdDLGVBQWUsQ0FBQyxDQUFBO0FBQ3hELHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUUzQyxRQUFPLDZCQUE2QixDQUFDLENBQUE7QUFHckM7SUFFSSxzQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFFdEIsY0FBUyxHQUFHLFlBQVksQ0FBQztJQUZDLENBQUM7SUFJbkMsZ0NBQVMsR0FBVDtRQUNJOzs7dUNBRytCO1FBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLG9CQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLEVBQVU7UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTthQUNsQixJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQWYsQ0FBZSxDQUFDLEVBQXJDLENBQXFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU8sa0NBQVcsR0FBbkIsVUFBb0IsUUFBa0I7UUFDbEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQWEsQ0FBQztJQUN0QyxDQUFDO0lBRU8sa0NBQVcsR0FBbkIsVUFBb0IsS0FBVTtRQUMxQixPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMseUJBQXlCO1FBQ3BFLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQTNCTDtRQUFDLGlCQUFVLEVBQUU7O29CQUFBO0lBNEJiLG1CQUFDO0FBQUQsQ0FBQyxBQTNCRCxJQTJCQztBQTNCWSxvQkFBWSxlQTJCeEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzc3VlIH0gZnJvbSAnLi9pc3N1ZSc7XHJcbmltcG9ydCB7IElTU1VFUyB9IGZyb20gJy4vbW9jay1pc3N1ZXMnO1xyXG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJc3N1ZVNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc3N1ZXNVcmwgPSAnYXBpL0lzc3Vlcyc7XHJcblxyXG4gICAgZ2V0SXNzdWVzKCk6IFByb21pc2U8SXNzdWVbXT4ge1xyXG4gICAgICAgIC8qcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5pc3N1ZXNVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHsgcmV0dXJuIHRoaXMuZ2V0UmVzcG9uc2UocmVzcG9uc2UpOyB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7Ki9cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKElTU1VFUyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXNzdWUoaWQ6IG51bWJlcik6IFByb21pc2U8SXNzdWU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJc3N1ZXMoKVxyXG4gICAgICAgICAgICAudGhlbihpc3N1ZXMgPT4gaXNzdWVzLmZpbmQoaXNzdWUgPT4gaXNzdWUuaWQgPT09IGlkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSZXNwb25zZShyZXNwb25zZTogUmVzcG9uc2UpOiBJc3N1ZVtdIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpIGFzIElzc3VlW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCcsIGVycm9yKTsgLy8gZm9yIGRlbW8gcHVycG9zZXMgb25seVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcclxuICAgIH1cclxufSJdfQ==