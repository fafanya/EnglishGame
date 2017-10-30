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

import { GameComponent } from './game/game.component';
import { AccountComponent } from './game/account.component';
import { RoundDetailComponent } from './game/round-detail.component';
import { DuelsComponent } from './game/duels.component';
import { GameService } from './game/game.service';

import { AuthService } from './game/services/auth.service';
import { SigninComponent } from './game/signin/signin.component';
import { SignupComponent } from './game/signup/signup.component';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';

import { ConfigService } from './signalr/config.service';
import { DataService } from './signalr/data.service';
import { RHomeComponent } from './signalr/rhome.component';
import { HighlightDirective } from './signalr/highlight.directive';
import { MatchComponent } from './signalr/match.component';
import { ChatComponent } from './signalr/chat.component';

import { AdminComponent } from './admin/admin.component';

import { WorkbookModule } from './workbook/workbook.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatGridListModule, MatProgressSpinnerModule,
        WorkbookModule
    ],
    declarations:
    [
        AppComponent,
        IssueDetailComponent,
        IssuesComponent,
        DashboardComponent,
        GameComponent,
        AccountComponent,
        RoundDetailComponent,
        SigninComponent,
        SignupComponent,
        ChatComponent,
        RHomeComponent,
        HighlightDirective,
        MatchComponent,
        DuelsComponent,
        AdminComponent
    ],
    providers: [
        IssueService,
        AuthService,
        ConfigService,
        DataService,
        GameService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }