import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReservaComponent } from './reserva/reserva.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservaComponent,
    HabitacionesComponent,
    UbicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
