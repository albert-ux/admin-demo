import { RouterModule ,Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafico1Component } from './pages/grafico1/grafico1.component';
import { NotpagefoundComponent } from './share/notpagefound/notpagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './register/register.component';


const appRoutes : Routes = [
    {path: '', component: PagesComponent,
    children: [
        {path: 'progress', component: ProgressComponent},
        {path: 'graficas1', component: Grafico1Component},
        {path: 'dashboard', component: DashboardComponent},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]},
    
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NotpagefoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});