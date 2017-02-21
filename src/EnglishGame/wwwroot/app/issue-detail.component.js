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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var issue_service_1 = require("./issue.service");
var issue_1 = require("./issue");
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
    return IssueDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", issue_1.Issue)
], IssueDetailComponent.prototype, "issue", void 0);
IssueDetailComponent = __decorate([
    core_1.Component({
        selector: 'issue-detail',
        templateUrl: '../html/issue-detail.component.html',
        styleUrls: ['../html/issue-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        common_1.Location,
        issue_service_1.IssueService])
], IssueDetailComponent);
exports.IssueDetailComponent = IssueDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNzdWUtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9pc3N1ZS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBd0Q7QUFDeEQsMENBQXlEO0FBQ3pELDBDQUEyQztBQUUzQyxpREFBK0M7QUFFL0MsaUNBQWdDO0FBT2hDLElBQWEsb0JBQW9CO0lBQzdCLDhCQUNZLEtBQXFCLEVBQ3JCLFFBQWtCLEVBQ2xCLFlBQTBCO1FBRjFCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBSSxDQUFDO0lBSzNDLHVDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQWM7WUFDckMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO2lCQUN6QixJQUFJLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHFDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDTCwyQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFiRztJQURDLFlBQUssRUFBRTs4QkFDRCxhQUFLO21EQUFDO0FBUEosb0JBQW9CO0lBTGhDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsY0FBYztRQUN4QixXQUFXLEVBQUUscUNBQXFDO1FBQ2xELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO0tBQ3BELENBQUM7cUNBR3FCLHVCQUFjO1FBQ1gsaUJBQVE7UUFDSiw0QkFBWTtHQUo3QixvQkFBb0IsQ0FvQmhDO0FBcEJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBJc3N1ZVNlcnZpY2UgfSBmcm9tICcuL2lzc3VlLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgSXNzdWUgfSBmcm9tICcuL2lzc3VlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpc3N1ZS1kZXRhaWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuLi9odG1sL2lzc3VlLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi4vaHRtbC9pc3N1ZS1kZXRhaWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc3N1ZURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcclxuICAgICAgICBwcml2YXRlIGlzc3VlU2VydmljZTogSXNzdWVTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgaXNzdWU6IElzc3VlO1xyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zLmZvckVhY2goKHBhcmFtczogUGFyYW1zKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9ICtwYXJhbXNbJ2lkJ107XHJcbiAgICAgICAgICAgIHRoaXMuaXNzdWVTZXJ2aWNlLmdldElzc3VlKGlkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaXNzdWUgPT4gdGhpcy5pc3N1ZSA9IGlzc3VlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbiAgICB9XHJcbn0iXX0=