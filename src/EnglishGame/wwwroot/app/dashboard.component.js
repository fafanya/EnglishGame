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
var DashboardComponent = (function () {
    function DashboardComponent(issueService) {
        this.issueService = issueService;
        this.issues = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.issueService.getIssues().then(function (issues) { return _this.issues = issues.slice(1, 5); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dashboard',
        templateUrl: '../html/dashboard.component.html',
        styleUrls: ['../html/dashboard.component.css']
    }),
    __metadata("design:paramtypes", [issue_service_1.IssueService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBa0Q7QUFHbEQsaURBQStDO0FBUS9DLElBQWEsa0JBQWtCO0lBRTNCLDRCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUQ5QyxXQUFNLEdBQVksRUFBRSxDQUFDO0lBQzZCLENBQUM7SUFFbkQscUNBQVEsR0FBUjtRQUFBLGlCQUVDO1FBREcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFoQyxDQUFnQyxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSxrQkFBa0I7SUFOOUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsa0NBQWtDO1FBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO0tBQ2pELENBQUM7cUNBR29DLDRCQUFZO0dBRnJDLGtCQUFrQixDQU85QjtBQVBZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJc3N1ZSB9IGZyb20gJy4vaXNzdWUnO1xyXG5pbXBvcnQgeyBJc3N1ZVNlcnZpY2UgfSBmcm9tICcuL2lzc3VlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdkYXNoYm9hcmQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuLi9odG1sL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi4vaHRtbC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgaXNzdWVzOiBJc3N1ZVtdID0gW107XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGlzc3VlU2VydmljZTogSXNzdWVTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzc3VlU2VydmljZS5nZXRJc3N1ZXMoKS50aGVuKGlzc3VlcyA9PiB0aGlzLmlzc3VlcyA9IGlzc3Vlcy5zbGljZSgxLCA1KSk7XHJcbiAgICB9XHJcbn0iXX0=