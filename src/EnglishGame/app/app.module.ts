import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent }   from './app.component';
import { IssueDetailComponent } from './issue-detail.component';
import { IssuesComponent } from './issues.component';
import { DashboardComponent } from './dashboard.component';
import { IssueService } from  './issue.service';
import { GameComponent } from './game/game.component';
import { AccountComponent } from './game/account.component';
import 'hammerjs';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        MaterialModule.forRoot()
    ],
    declarations:
    [
        AppComponent,
        IssueDetailComponent,
        IssuesComponent,
        DashboardComponent,
        GameComponent,
        AccountComponent
    ],
    providers: [IssueService],
    bootstrap: [AppComponent]
})
export class AppModule { }