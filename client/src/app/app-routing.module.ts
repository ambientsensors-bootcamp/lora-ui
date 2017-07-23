import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ConnectionsComponent } from './component/connections/connections.component';

import { DevicesComponent } from './component/devices/devices.component';;





const routes: Routes =

    [

        { path: 'devices', component: DevicesComponent},

        { path: 'connections', component: ConnectionsComponent },

        { path: '', pathMatch: 'full', redirectTo: 'connections' },

        { path: '**', pathMatch: 'full', redirectTo: 'connections' }

    ];
@NgModule({

    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule]

})

export class AppRoutingModule {

}