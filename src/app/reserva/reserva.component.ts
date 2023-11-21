import { Component,ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { MatDateRangePicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
  
})
export class ReservaComponent {
  formulario: FormGroup;
  exito: boolean = false;

  // Decorador ViewChild para acceder al elemento con la variable local 'picker'
  @ViewChild('picker') dateRangePicker!: MatDateRangePicker<Date>;
  
  // Crea instancias de FormControl para las fechas de inicio y fin
    startDateControl = new FormControl();
    endDateControl = new FormControl();

  // Propiedad para almacenar el rango de fechas seleccionado
  selectedDateRange: { start: Date | null, end: Date | null } = { start: null, end: null };
  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]), // Nombre del campo y valor inicial
      email: new FormControl('',[Validators.required, Validators.email]),
      // Agrega más campos aquí si es necesario
    });
  }
  enviarFormulario() {
    if (this.formulario.valid) {
      // Aquí puedes realizar acciones de envío y, si es exitoso, mostrar el mensaje de éxito
      this.exito = true;
    } else {
      // Si hay errores de validación, no muestres el mensaje de éxito
      this.exito = false;
    }
  }
  
}



