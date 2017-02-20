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
var DashboardComponent = (function () {
    function DashboardComponent(issueService) {
        this.issueService = issueService;
        this.issues = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.issueService.getIssues().then(function (issues) { return _this.issues = issues.slice(1, 5); });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dashboard',
            templateUrl: '../html/dashboard.component.html',
            styleUrls: ['../html/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [issue_service_1.IssueService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFHbEQsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFRL0M7SUFFSSw0QkFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFEOUMsV0FBTSxHQUFZLEVBQUUsQ0FBQztJQUM2QixDQUFDO0lBRW5ELHFDQUFRLEdBQVI7UUFBQSxpQkFFQztRQURHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFaTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztTQUNqRCxDQUFDOzswQkFBQTtJQVFGLHlCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSwwQkFBa0IscUJBTzlCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSXNzdWUgfSBmcm9tICcuL2lzc3VlJztcclxuaW1wb3J0IHsgSXNzdWVTZXJ2aWNlIH0gZnJvbSAnLi9pc3N1ZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnZGFzaGJvYXJkJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi4vaHRtbC9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4uL2h0bWwvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGlzc3VlczogSXNzdWVbXSA9IFtdO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpc3N1ZVNlcnZpY2U6IElzc3VlU2VydmljZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc3N1ZVNlcnZpY2UuZ2V0SXNzdWVzKCkudGhlbihpc3N1ZXMgPT4gdGhpcy5pc3N1ZXMgPSBpc3N1ZXMuc2xpY2UoMSwgNSkpO1xyXG4gICAgfVxyXG59Il19