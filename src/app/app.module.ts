import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReservaComponent } from './reserva/reserva.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';

//otros
//import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservaComponent,
    HabitacionesComponent,
    UbicacionComponent,
    NavbarComponent
  ],
  imports: [
   // RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule, // Importa el módulo de animaciones
    MatDatepickerModule, // Agrega MatDatepickerModule
    MatInputModule, // Agrega MatInputModule
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
