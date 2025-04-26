import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { dashboardRoutes } from './dashboard/dashboard.routes';
import { AgregarModificarComponent } from './agregar-modificar/agregar-modificar.component';
import { eliminarComponent } from './eliminar/eliminar.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, children: dashboardRoutes },
  { path: 'agregar', component: AgregarModificarComponent, children: dashboardRoutes },
  { path: 'eliminar', component: eliminarComponent, children: dashboardRoutes },
  { path: '**', redirectTo: 'login' },
];
