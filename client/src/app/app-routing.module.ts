import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CollectionsComponent} from './components/collections/collections.component'
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

const routes: Routes =
    [
     
        { path: 'about', component: AboutComponent},
        { path: 'collections', component: CollectionsComponent},
        { path: 'barChart', component: BarChartComponent},
        { path: '', pathMatch: 'full', redirectTo: 'about' },
        { path: '**', pathMatch: 'full', redirectTo: 'about' }
    ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}