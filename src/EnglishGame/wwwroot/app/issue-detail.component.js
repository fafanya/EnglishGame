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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var issue_service_1 = require('./issue.service');
var issue_1 = require('./issue');
var IssueDetailComponent = (function () {
    function IssueDetailComponent(route, location, issueService) {
        this.route = route;
        this.location = location;
        this.issueService = issueService;
    }
    IssueDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.issueService.getIssue(id)
                .then(function (issue) { return _this.issue = issue; });
        });
    };
    IssueDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', issue_1.Issue)
    ], IssueDetailComponent.prototype, "issue", void 0);
    IssueDetailComponent = __decorate([
        core_1.Component({
            selector: 'issue-detail',
            templateUrl: '../html/issue-detail.component.html',
            styleUrls: ['../html/issue-detail.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, common_1.Location, issue_service_1.IssueService])
    ], IssueDetailComponent);
    return IssueDetailComponent;
}());
exports.IssueDetailComponent = IssueDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNzdWUtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9pc3N1ZS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFDeEQsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFDekQsdUJBQXlCLGlCQUFpQixDQUFDLENBQUE7QUFFM0MsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFFL0Msc0JBQXNCLFNBQVMsQ0FBQyxDQUFBO0FBT2hDO0lBQ0ksOEJBQ1ksS0FBcUIsRUFDckIsUUFBa0IsRUFDbEIsWUFBMEI7UUFGMUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFJLENBQUM7SUFLM0MsdUNBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBYztZQUNyQyxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7aUJBQ3pCLElBQUksQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQscUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQWJEO1FBQUMsWUFBSyxFQUFFOzt1REFBQTtJQVhaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxxQ0FBcUM7WUFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7U0FDcEQsQ0FBQzs7NEJBQUE7SUFxQkYsMkJBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLDRCQUFvQix1QkFvQmhDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgSXNzdWVTZXJ2aWNlIH0gZnJvbSAnLi9pc3N1ZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IElzc3VlIH0gZnJvbSAnLi9pc3N1ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaXNzdWUtZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi4vaHRtbC9pc3N1ZS1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4uL2h0bWwvaXNzdWUtZGV0YWlsLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSXNzdWVEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICAgICAgcHJpdmF0ZSBpc3N1ZVNlcnZpY2U6IElzc3VlU2VydmljZSkgeyB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGlzc3VlOiBJc3N1ZTtcclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5mb3JFYWNoKChwYXJhbXM6IFBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSArcGFyYW1zWydpZCddO1xyXG4gICAgICAgICAgICB0aGlzLmlzc3VlU2VydmljZS5nZXRJc3N1ZShpZClcclxuICAgICAgICAgICAgICAgIC50aGVuKGlzc3VlID0+IHRoaXMuaXNzdWUgPSBpc3N1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgfVxyXG59Il19