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
var issue_detail_component_1 = require('./issue-detail.component');
var issues_component_1 = require('./issues.component');
var dashboard_component_1 = require('./dashboard.component');
var game_component_1 = require('./game/game.component');
var account_component_1 = require('./game/account.component');
var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'issues',
        component: issues_component_1.IssuesComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: issue_detail_component_1.IssueDetailComponent
    },
    {
        path: 'game',
        component: game_component_1.GameComponent
    },
    {
        path: 'account',
        component: account_component_1.AccountComponent
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vYXBwL2FwcC1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXFDLGVBQWUsQ0FBQyxDQUFBO0FBQ3JELHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZELHVDQUFxQywwQkFBMEIsQ0FBQyxDQUFBO0FBQ2hFLGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3JELG9DQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzNELCtCQUE4Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3RELGtDQUFpQywwQkFBMEIsQ0FBQyxDQUFBO0FBRTVELElBQU0sTUFBTSxHQUFXO0lBQ25CO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsWUFBWTtRQUN4QixTQUFTLEVBQUUsTUFBTTtLQUNwQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLFFBQVE7UUFDZCxTQUFTLEVBQUUsa0NBQWU7S0FDN0I7SUFDRDtRQUNJLElBQUksRUFBRSxXQUFXO1FBQ2pCLFNBQVMsRUFBRSx3Q0FBa0I7S0FDaEM7SUFDRDtRQUNJLElBQUksRUFBRSxZQUFZO1FBQ2xCLFNBQVMsRUFBRSw2Q0FBb0I7S0FDbEM7SUFDRDtRQUNJLElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFLDhCQUFhO0tBQzNCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsU0FBUztRQUNmLFNBQVMsRUFBRSxvQ0FBZ0I7S0FDOUI7Q0FDSixDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBSmpDO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkMsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztTQUMxQixDQUFDOzt3QkFBQTtJQUM4Qix1QkFBQztBQUFELENBQUMsQUFBakMsSUFBaUM7QUFBcEIsd0JBQWdCLG1CQUFJLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IElzc3VlRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9pc3N1ZS1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSXNzdWVzQ29tcG9uZW50IH0gZnJvbSAnLi9pc3N1ZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2FtZUNvbXBvbmVudCB9IGZyb20gJy4vZ2FtZS9nYW1lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjY291bnRDb21wb25lbnQgfSBmcm9tICcuL2dhbWUvYWNjb3VudC5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJycsXHJcbiAgICAgICAgcmVkaXJlY3RUbzogJy9kYXNoYm9hcmQnLFxyXG4gICAgICAgIHBhdGhNYXRjaDogJ2Z1bGwnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICdpc3N1ZXMnLFxyXG4gICAgICAgIGNvbXBvbmVudDogSXNzdWVzQ29tcG9uZW50XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICdkYXNoYm9hcmQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICdkZXRhaWwvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IElzc3VlRGV0YWlsQ29tcG9uZW50XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICdnYW1lJyxcclxuICAgICAgICBjb21wb25lbnQ6IEdhbWVDb21wb25lbnRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJ2FjY291bnQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogQWNjb3VudENvbXBvbmVudFxyXG4gICAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==