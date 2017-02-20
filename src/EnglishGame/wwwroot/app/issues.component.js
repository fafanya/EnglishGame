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
var core_1 = require('@angular/core');
var issue_service_1 = require('./issue.service');
var router_1 = require('@angular/router');
var IssuesComponent = (function () {
    function IssuesComponent(issueService, router) {
        this.issueService = issueService;
        this.router = router;
        this.title = 'Tracker of Issues';
    }
    IssuesComponent.prototype.onSelect = function (issue) {
        this.selectedIssue = issue;
    };
    IssuesComponent.prototype.getIssues = function () {
        var _this = this;
        this.issueService.getIssues().then(function (issues) { return _this.issues = issues; });
    };
    IssuesComponent.prototype.ngOnInit = function () {
        this.getIssues();
    };
    IssuesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedIssue.id]);
    };
    IssuesComponent = __decorate([
        core_1.Component({
            selector: 'issues',
            templateUrl: '../html/issues.component.html',
            styleUrls: ['../html/issues.component.css'],
            providers: [issue_service_1.IssueService]
        }), 
        __metadata('design:paramtypes', [issue_service_1.IssueService, router_1.Router])
    ], IssuesComponent);
    return IssuesComponent;
}());
exports.IssuesComponent = IssuesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNzdWVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9pc3N1ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFFMUMsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFFL0MsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFRekM7SUFLSSx5QkFDWSxZQUEwQixFQUMxQixNQUFjO1FBRGQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQU4xQixVQUFLLEdBQUcsbUJBQW1CLENBQUM7SUFNRSxDQUFDO0lBRS9CLGtDQUFRLEdBQVIsVUFBUyxLQUFZO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFDRCxtQ0FBUyxHQUFUO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFwQixDQUFvQixDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELG9DQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQTFCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FDNUIsQ0FBQzs7dUJBQUE7SUFzQkYsc0JBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBckJZLHVCQUFlLGtCQXFCM0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJc3N1ZSB9IGZyb20gJy4vaXNzdWUnO1xyXG5pbXBvcnQgeyBJc3N1ZVNlcnZpY2UgfSBmcm9tICcuL2lzc3VlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpc3N1ZXMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuLi9odG1sL2lzc3Vlcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi4vaHRtbC9pc3N1ZXMuY29tcG9uZW50LmNzcyddLFxyXG4gICAgcHJvdmlkZXJzOiBbSXNzdWVTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSXNzdWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHRpdGxlID0gJ1RyYWNrZXIgb2YgSXNzdWVzJztcclxuICAgIHNlbGVjdGVkSXNzdWU6IElzc3VlO1xyXG4gICAgaXNzdWVzOiBJc3N1ZVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaXNzdWVTZXJ2aWNlOiBJc3N1ZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcblxyXG4gICAgb25TZWxlY3QoaXNzdWU6IElzc3VlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZElzc3VlID0gaXNzdWU7XHJcbiAgICB9XHJcbiAgICBnZXRJc3N1ZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc3N1ZVNlcnZpY2UuZ2V0SXNzdWVzKCkudGhlbihpc3N1ZXMgPT4gdGhpcy5pc3N1ZXMgPSBpc3N1ZXMpO1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5nZXRJc3N1ZXMoKTtcclxuICAgIH1cclxuICAgIGdvdG9EZXRhaWwoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGV0YWlsJywgdGhpcy5zZWxlY3RlZElzc3VlLmlkXSk7XHJcbiAgICB9XHJcbn0iXX0=