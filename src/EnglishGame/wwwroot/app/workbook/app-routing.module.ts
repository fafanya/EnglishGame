import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkbookComponent } from './workbook.component';
import { StartPageComponent } from './startpage.component';

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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }