import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatGridListModule, MatListModule, MatProgressSpinnerModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { StartPageComponent } from './startpage.component';
import { AppRoutingModule } from './app-routing.module';
import { TeacherAreaComponent } from './teacher-area.component';
import { PupilAreaComponent } from './pupil-area.component';
import { ExerciseDetailComponent } from './exercise-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule, MatGridListModule, MatListModule, MatProgressSpinnerModule
    ],
    declarations:
    [
        AppComponent,
        StartPageComponent,
        TeacherAreaComponent,
        PupilAreaComponent,
        ExerciseDetailComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }