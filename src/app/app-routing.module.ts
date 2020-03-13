import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './shared/body/body.component';
import { DominiohostComponent } from './pages/dominiohost/dominiohost.component';
import { CloudcompuComponent } from './pages/cloudcompu/cloudcompu.component';
import { PagewebComponent } from './pages/pageweb/pageweb.component';

const app_routes: Routes = [
    { path: '', component: BodyComponent},
    { path: '#', component: BodyComponent},
    { path: 'dominiohost', component: DominiohostComponent},
    { path: 'pageweb', component: PagewebComponent},
    { path: 'cloudcompu', component: CloudcompuComponent},
    { path: '**', pathMatch: 'full', redirectTo: ''}
    
];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{ }