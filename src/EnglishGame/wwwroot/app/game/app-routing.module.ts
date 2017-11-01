import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game.component';
import { AccountComponent } from './account.component';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RoundDetailComponent } from './round-detail.component';
import { DuelsComponent } from './duels.component';

import { RHomeComponent } from './signalr/rhome.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/workbook',
        pathMatch: 'full'
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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }