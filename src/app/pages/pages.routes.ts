import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafico1Component } from './grafico1/grafico1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const pagesRoutes: Routes = [

    {path: '', component: PagesComponent,
    children: [
        {path: 'progress', component: ProgressComponent, data: {titulo: 'Progreso'}},
        {path: 'promesas', component: PromesasComponent,  data: {titulo: 'Promesas'}},
        {path: 'rxjs', component: RxjsComponent, data: {titulo: 'Rxjs'}},
        {path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Configuraciones'}},
        {path: 'graficas1', component: Grafico1Component, data: {titulo: 'Gráficos'}},
        {path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'}},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
}


];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);