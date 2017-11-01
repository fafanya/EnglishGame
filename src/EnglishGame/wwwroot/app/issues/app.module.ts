import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { IssueDetailComponent } from './issue-detail.component';
import { IssuesComponent } from './issues.component';
import { DashboardComponent } from './dashboard.component';
import { IssueService } from './issue.service';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatGridListModule, MatProgressSpinnerModule
    ],
    declarations:
    [
        AppComponent,
        IssueDetailComponent,
        IssuesComponent,
        DashboardComponent
    ],
    providers: [
        IssueService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }