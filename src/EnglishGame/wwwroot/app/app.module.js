"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var app_component_1 = require("./app.component");
var issue_detail_component_1 = require("./issue-detail.component");
var issues_component_1 = require("./issues.component");
var dashboard_component_1 = require("./dashboard.component");
var issue_service_1 = require("./issue.service");
var game_component_1 = require("./game/game.component");
var account_component_1 = require("./game/account.component");
require("hammerjs");
var app_routing_module_1 = require("./app-routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
            material_1.MaterialModule.forRoot()
        ],
        declarations: [
            app_component_1.AppComponent,
            issue_detail_component_1.IssueDetailComponent,
            issues_component_1.IssuesComponent,
            dashboard_component_1.DashboardComponent,
            game_component_1.GameComponent,
            account_component_1.AccountComponent
        ],
        providers: [issue_service_1.IssueService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxzQ0FBOEM7QUFDOUMsOERBQTBEO0FBQzFELHdDQUErQztBQUMvQyxzQ0FBMkM7QUFDM0MsOENBQW1EO0FBQ25ELGlEQUFpRDtBQUNqRCxtRUFBZ0U7QUFDaEUsdURBQXFEO0FBQ3JELDZEQUEyRDtBQUMzRCxpREFBZ0Q7QUFDaEQsd0RBQXNEO0FBQ3RELDhEQUE0RDtBQUM1RCxvQkFBa0I7QUFFbEIsMkRBQTREO0FBc0I1RCxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUFwQnJCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLGdDQUFhO1lBQ2IsbUJBQVc7WUFDWCxpQkFBVTtZQUNWLHFDQUFnQjtZQUNoQix5QkFBYyxDQUFDLE9BQU8sRUFBRTtTQUMzQjtRQUNELFlBQVksRUFDWjtZQUNJLDRCQUFZO1lBQ1osNkNBQW9CO1lBQ3BCLGtDQUFlO1lBQ2Ysd0NBQWtCO1lBQ2xCLDhCQUFhO1lBQ2Isb0NBQWdCO1NBQ25CO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUN6QixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzVCLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSAgIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElzc3VlRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9pc3N1ZS1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSXNzdWVzQ29tcG9uZW50IH0gZnJvbSAnLi9pc3N1ZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSXNzdWVTZXJ2aWNlIH0gZnJvbSAgJy4vaXNzdWUuc2VydmljZSc7XHJcbmltcG9ydCB7IEdhbWVDb21wb25lbnQgfSBmcm9tICcuL2dhbWUvZ2FtZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY2NvdW50Q29tcG9uZW50IH0gZnJvbSAnLi9nYW1lL2FjY291bnQuY29tcG9uZW50JztcclxuaW1wb3J0ICdoYW1tZXJqcyc7XHJcblxyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gICAgIGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBIdHRwTW9kdWxlLFxyXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgTWF0ZXJpYWxNb2R1bGUuZm9yUm9vdCgpXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOlxyXG4gICAgW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBJc3N1ZURldGFpbENvbXBvbmVudCxcclxuICAgICAgICBJc3N1ZXNDb21wb25lbnQsXHJcbiAgICAgICAgRGFzaGJvYXJkQ29tcG9uZW50LFxyXG4gICAgICAgIEdhbWVDb21wb25lbnQsXHJcbiAgICAgICAgQWNjb3VudENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW0lzc3VlU2VydmljZV0sXHJcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9Il19