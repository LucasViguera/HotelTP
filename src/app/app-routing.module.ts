import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservaComponent } from './reserva/reserva.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ConsultaComponent } from './consulta/consulta.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'habitaciones', component: HabitacionesComponent },
  { path: 'ubicaciones', component: UbicacionComponent },
  { path: 'reservas', component: ReservaComponent },
  {path: 'servicios', component:ServiciosComponent},
  {path: 'consultas', component:ConsultaComponent},
  // Otras rutas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
