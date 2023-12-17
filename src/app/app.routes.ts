import { Routes } from '@angular/router';
import { AdminComponent } from './template/admin/admin.component';
import { PortofolioWebComponent } from './template/portofolio-web/portofolio-web.component';


export const routes: Routes = [
    { 
        path: '',
        component: PortofolioWebComponent
    },
    { 
        path: 'admin',
        component: AdminComponent,
    }
];
