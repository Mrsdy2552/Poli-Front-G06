import { Routes } from '@angular/router';
import { eliminarComponent } from '../eliminar/eliminar.component';
import { AgregarModificarComponent } from '../agregar-modificar/agregar-modificar.component';
import { InicioComponent } from '../inicio/inicio.component';
export const dashboardRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'eliminar', component: eliminarComponent },
  { path: 'agregar', component: AgregarModificarComponent },
];
