import { Component,ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
  
})
export class ReservaComponent {
  formulario: FormGroup;
  exito: boolean = false;
  error: boolean = false;
  tipoHabitacion: string = '';


  //variables del metodo generarPass
  numeros = '123456789';
  letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  todo = this.numeros + this.letras;

  /*// Decorador ViewChild para acceder al elemento con la variable local 'picker'
  @ViewChild('picker') dateRangePicker!: MatDateRangePicker<Date>;
  
  // Crea instancias de FormControl para las fechas de inicio y fin
    startDateControl = new FormControl();
    endDateControl = new FormControl();

  // Propiedad para almacenar el rango de fechas seleccionado
  selectedDateRange: { start: Date | null, end: Date | null } = { start: null, end: null };   No usado porq no se termino usando el tema de fechas todavia*/ 


  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]), // Nombre del campo y valor inicial
      email: new FormControl('',[Validators.required, Validators.email]),
      direccion: new FormControl(''),
      telefono: new FormControl('',[Validators.required, Validators.maxLength(9)]),
      tipohabitacion: new FormControl(''),
      password: new FormControl(''),
      cantidadPersonas: new FormControl('', [Validators.required, (control) => this.validarCantidadPersonas(control)])
    });
  }

        
        validarCantidadPersonas(control: AbstractControl) {
          if (control instanceof FormControl) {
            const cantidad = control.value;
        
            if (isNaN(cantidad) || cantidad < 1 || cantidad > 4) {
              return { cantidadInvalida: true };
            }
          }
        
          return null;
        }
  

        //Generar contraseñas para recuperar la informacion de la reserva en consulta  
        generarPass=(longitud = 10)=>{
          let password = '';
          for (let x=0; x<longitud; x++){
          let aleatorio = Math.floor(Math.random() * this.todo.length);
          password += this.todo.charAt(aleatorio);
          }
          return password;
        };

        enviarFormulario() {

          if (this.formulario.valid) {
          //La llamada al generador va aca porque sino solo genera una contraseña por cada vez que se refresca la pagina
          this.formulario.get('password')?.setValue(this.generarPass());

            const datos = this.formulario.value;
            console.log('Datos del formulario:', datos);
            this.error= false;
            this.exito = true;
            
      } else {
        console.log('Formulario no válido. Por favor, corrija los errores.'); //Es para mostrar en consola que llega hasta este punto
        Object.values(this.formulario.controls).forEach(control => control.markAsTouched()); //Marca todos los input como tocados por si se desea enviar sin datos
        this.error= true;
      }
}
}