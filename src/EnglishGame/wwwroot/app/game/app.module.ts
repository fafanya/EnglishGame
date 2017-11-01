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
import { GameService } from './services/game.service';

import { AuthService } from './services/auth.service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

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
        GameComponent,
        AccountComponent,
        RoundDetailComponent,
        SigninComponent,
        SignupComponent,
        DuelsComponent
    ],
    providers: [
        AuthService,
        GameService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }