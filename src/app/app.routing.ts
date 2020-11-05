import { Routes } from '@angular/router';
import { NotAuthorizedComponent } from './containers/not-authorized/view/not-authorized/not-authorized.component';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./components/core/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'not-authorized',
    component: NotAuthorizedComponent
  },
  { path: '**', component: NotAuthorizedComponent, pathMatch: 'full' }
];
