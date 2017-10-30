import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkbookComponent } from './workbook.component';
import { StartPageComponent } from './startpage.component';
import { TeacherAreaComponent } from './teacher-area.component';
import { PupilAreaComponent } from './pupil-area.component';
import { ExerciseDetailComponent } from './exercise-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/startpage',
        pathMatch: 'full'
    },
    {
        path: 'startpage',
        component: StartPageComponent
    },
    {
        path: 'workbook',
        component: StartPageComponent
    },
    {
        path: 'teacher',
        component: TeacherAreaComponent
    },
    {
        path: 'pupil',
        component: PupilAreaComponent
    },
    {
        path: 'create_exercise',
        component: ExerciseDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }