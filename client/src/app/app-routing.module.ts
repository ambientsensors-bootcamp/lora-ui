import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';


const routes: Routes =
    [
     
        { path: 'about', component: AboutComponent},
        { path: '', pathMatch: 'full', redirectTo: 'database' },
        { path: '**', pathMatch: 'full', redirectTo: 'database' }
    ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}