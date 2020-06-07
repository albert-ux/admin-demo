import { RouterModule ,Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NotpagefoundComponent } from './share/notpagefound/notpagefound.component';
import { RegisterComponent } from './register/register.component';


const appRoutes : Routes = [
    
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NotpagefoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});