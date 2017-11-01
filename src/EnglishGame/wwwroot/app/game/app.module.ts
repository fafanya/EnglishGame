import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';

import { GameComponent } from './game.component';
import { AccountComponent } from './account.component';
import { RoundDetailComponent } from './round-detail.component';
import { DuelsComponent } from './duels.component';
import { GameService } from './game.service';

import { AuthService } from './services/auth.service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';

import { ConfigService } from './signalr/config.service';
import { DataService } from './signalr/data.service';
import { RHomeComponent } from './signalr/rhome.component';
import { HighlightDirective } from './signalr/highlight.directive';
import { MatchComponent } from './signalr/match.component';
import { ChatComponent } from './signalr/chat.component';

//import { AdminComponent } from './admin/admin.component';

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
        GameComponent,
        AccountComponent,
        RoundDetailComponent,
        SigninComponent,
        SignupComponent,
        ChatComponent,
        RHomeComponent,
        HighlightDirective,
        MatchComponent,
        DuelsComponent
        //AdminComponent
    ],
    providers: [
        AuthService,
        ConfigService,
        DataService,
        GameService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }