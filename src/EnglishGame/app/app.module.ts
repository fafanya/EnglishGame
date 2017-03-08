import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent }   from './app.component';
import { IssueDetailComponent } from './issue-detail.component';
import { IssuesComponent } from './issues.component';
import { DashboardComponent } from './dashboard.component';
import { IssueService } from './issue.service';

import { GameComponent } from './game/game.component';
import { AccountComponent } from './game/account.component';
import { RoundComponent } from './game/round.component';
import { GameService } from './game/game.service';

import { AuthService } from './game/login/_services/auth.service';
import { HomeComponent } from './game/login/home/home.component';
import { LoginComponent } from './game/login/login/login.component';

import 'hammerjs';

import { AppRoutingModule }     from './app-routing.module';

import { ConfigService } from './signalr/config.service';
import { DataService } from './signalr/data.service';
import { RHomeComponent } from './signalr/rhome.component';
import { HighlightDirective } from './signalr/highlight.directive';
import { MatchComponent } from './signalr/match.component';
import { ChatComponent } from './signalr/chat.component';

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
        AccountComponent,
        RoundComponent,

        HomeComponent,
        LoginComponent,
        ChatComponent,
        RHomeComponent,
        HighlightDirective,
        MatchComponent
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