import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafico1Component } from './grafico1/grafico1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


const pagesRoutes: Routes = [

    {path: '', component: PagesComponent,
    children: [
        {path: 'progress', component: ProgressComponent},
        {path: 'account-settings', component: AccountSettingsComponent},
        {path: 'graficas1', component: Grafico1Component},
        {path: 'dashboard', component: DashboardComponent},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
}


];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);