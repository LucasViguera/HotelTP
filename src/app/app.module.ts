import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReservaComponent } from './reserva/reserva.component';
import { HabitacioneComponent } from './habitacione/habitacione.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservaComponent,
    HabitacioneComponent,
    UbicacionComponent
  ],
  imports: [
    CarouselModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }