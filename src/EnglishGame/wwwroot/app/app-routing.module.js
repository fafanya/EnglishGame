"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var issue_detail_component_1 = require("./issue-detail.component");
var issues_component_1 = require("./issues.component");
var dashboard_component_1 = require("./dashboard.component");
var game_component_1 = require("./game/game.component");
var account_component_1 = require("./game/account.component");
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
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vYXBwL2FwcC1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQXFEO0FBQ3JELDBDQUF1RDtBQUN2RCxtRUFBZ0U7QUFDaEUsdURBQXFEO0FBQ3JELDZEQUEyRDtBQUMzRCx3REFBc0Q7QUFDdEQsOERBQTREO0FBRTVELElBQU0sTUFBTSxHQUFXO0lBQ25CO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsWUFBWTtRQUN4QixTQUFTLEVBQUUsTUFBTTtLQUNwQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLFFBQVE7UUFDZCxTQUFTLEVBQUUsa0NBQWU7S0FDN0I7SUFDRDtRQUNJLElBQUksRUFBRSxXQUFXO1FBQ2pCLFNBQVMsRUFBRSx3Q0FBa0I7S0FDaEM7SUFDRDtRQUNJLElBQUksRUFBRSxZQUFZO1FBQ2xCLFNBQVMsRUFBRSw2Q0FBb0I7S0FDbEM7SUFDRDtRQUNJLElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFLDhCQUFhO0tBQzNCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsU0FBUztRQUNmLFNBQVMsRUFBRSxvQ0FBZ0I7S0FDOUI7Q0FDSixDQUFDO0FBTUYsSUFBYSxnQkFBZ0I7SUFBN0I7SUFBZ0MsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUFqQyxJQUFpQztBQUFwQixnQkFBZ0I7SUFKNUIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csZ0JBQWdCLENBQUk7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBJc3N1ZURldGFpbENvbXBvbmVudCB9IGZyb20gJy4vaXNzdWUtZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElzc3Vlc0NvbXBvbmVudCB9IGZyb20gJy4vaXNzdWVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdhbWVDb21wb25lbnQgfSBmcm9tICcuL2dhbWUvZ2FtZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY2NvdW50Q29tcG9uZW50IH0gZnJvbSAnLi9nYW1lL2FjY291bnQuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgIHJlZGlyZWN0VG86ICcvZGFzaGJvYXJkJyxcclxuICAgICAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnaXNzdWVzJyxcclxuICAgICAgICBjb21wb25lbnQ6IElzc3Vlc0NvbXBvbmVudFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnZGFzaGJvYXJkJyxcclxuICAgICAgICBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnZGV0YWlsLzppZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBJc3N1ZURldGFpbENvbXBvbmVudFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnZ2FtZScsXHJcbiAgICAgICAgY29tcG9uZW50OiBHYW1lQ29tcG9uZW50XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICdhY2NvdW50JyxcclxuICAgICAgICBjb21wb25lbnQ6IEFjY291bnRDb21wb25lbnRcclxuICAgIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=