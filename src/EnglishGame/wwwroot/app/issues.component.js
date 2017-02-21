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
var issue_service_1 = require("./issue.service");
var router_1 = require("@angular/router");
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
    return IssuesComponent;
}());
IssuesComponent = __decorate([
    core_1.Component({
        selector: 'issues',
        templateUrl: '../html/issues.component.html',
        styleUrls: ['../html/issues.component.css'],
        providers: [issue_service_1.IssueService]
    }),
    __metadata("design:paramtypes", [issue_service_1.IssueService,
        router_1.Router])
], IssuesComponent);
exports.IssuesComponent = IssuesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNzdWVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9pc3N1ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFFMUMsaURBQStDO0FBRS9DLDBDQUF5QztBQVF6QyxJQUFhLGVBQWU7SUFLeEIseUJBQ1ksWUFBMEIsRUFDMUIsTUFBYztRQURkLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFOMUIsVUFBSyxHQUFHLG1CQUFtQixDQUFDO0lBTUUsQ0FBQztJQUUvQixrQ0FBUSxHQUFSLFVBQVMsS0FBWTtRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ0QsbUNBQVMsR0FBVDtRQUFBLGlCQUVDO1FBREcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFDRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxvQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQlksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLCtCQUErQjtRQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztRQUMzQyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzVCLENBQUM7cUNBTzRCLDRCQUFZO1FBQ2xCLGVBQU07R0FQakIsZUFBZSxDQXFCM0I7QUFyQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSXNzdWUgfSBmcm9tICcuL2lzc3VlJztcclxuaW1wb3J0IHsgSXNzdWVTZXJ2aWNlIH0gZnJvbSAnLi9pc3N1ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaXNzdWVzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi4vaHRtbC9pc3N1ZXMuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4uL2h0bWwvaXNzdWVzLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHByb3ZpZGVyczogW0lzc3VlU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIElzc3Vlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICB0aXRsZSA9ICdUcmFja2VyIG9mIElzc3Vlcyc7XHJcbiAgICBzZWxlY3RlZElzc3VlOiBJc3N1ZTtcclxuICAgIGlzc3VlczogSXNzdWVbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGlzc3VlU2VydmljZTogSXNzdWVTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICAgIG9uU2VsZWN0KGlzc3VlOiBJc3N1ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJc3N1ZSA9IGlzc3VlO1xyXG4gICAgfVxyXG4gICAgZ2V0SXNzdWVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNzdWVTZXJ2aWNlLmdldElzc3VlcygpLnRoZW4oaXNzdWVzID0+IHRoaXMuaXNzdWVzID0gaXNzdWVzKTtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2V0SXNzdWVzKCk7XHJcbiAgICB9XHJcbiAgICBnb3RvRGV0YWlsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2RldGFpbCcsIHRoaXMuc2VsZWN0ZWRJc3N1ZS5pZF0pO1xyXG4gICAgfVxyXG59Il19