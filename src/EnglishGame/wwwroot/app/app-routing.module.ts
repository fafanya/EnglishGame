import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueDetailComponent } from './issue-detail.component';
import { IssuesComponent } from './issues.component';
import { DashboardComponent } from './dashboard.component';
import { GameComponent } from './game/game.component';
import { AccountComponent } from './game/account.component';

import { SigninComponent } from './game/signin/signin.component';
import { SignupComponent } from './game/signup/signup.component';
import { RoundDetailComponent } from './game/round-detail.component';
import { DuelsComponent } from './game/duels.component';

import { RHomeComponent } from './signalr/rhome.component';
import { AdminComponent } from './admin/admin.component';
import { WorkbookComponent } from './workbook/workbook.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/workbook',
        pathMatch: 'full'
    },
    {
        path: 'issues',
        component: IssuesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: IssueDetailComponent
    },
    {
        path: 'game',
        component: GameComponent
    },
    {
        path: 'account',
        component: AccountComponent
    },
    {
        path: "signin",
        component: SigninComponent
    },
    {
        path: "signup",
        component: SignupComponent
    },
    {
        path: 'rhome',
        component: RHomeComponent
    },
    {
        path: 'round/:id',
        component: RoundDetailComponent
    },
    {
        path: 'duels/:id',
        component: DuelsComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'workbook',
        component: WorkbookComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }