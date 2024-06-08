import { Routes } from '@angular/router';
import { PhoneauthComponent } from './phoneauth/phoneauth.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { CodeComponent } from './code/code.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    // {
    //     path: 'phoneauth',
    //     component: PhoneauthComponent
        
    // },
    {
        path: 'phoneno',
        component: PhoneNumberComponent
        
    },
    // {
    //     path: 'code',
    //     component: CodeComponent
        
    // },
    // {
    //     path: 'dashboard',
    //     component: DashboardComponent
        
    // },
    // {
    //     path: '',
    //     redirectTo: '/phone',
    //     pathMatch: 'full'
        
    // },
];
