import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatGridListModule, MatListModule,
    MatProgressSpinnerModule, MatInputModule, MatCardModule
} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';

import { GameComponent } from './game.component';
import { AccountComponent } from './account.component';
import { RoundDetailComponent } from './round-detail.component';
import { DuelsComponent } from './duels.component';
import { GameService } from './services/game.service';

import { AuthService } from '../_common/auth/auth.service';
import { SigninComponent } from '../_common/signin/signin.component';
import { SignupComponent } from '../_common/signup/signup.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule, MatGridListModule,
        MatListModule, MatProgressSpinnerModule, MatInputModule, MatCardModule
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