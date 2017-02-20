import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueDetailComponent } from './issue-detail.component';
import { IssuesComponent } from './issues.component';
import { DashboardComponent } from './dashboard.component';
import { GameComponent } from './game/game.component';
import { AccountComponent } from './game/account.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }