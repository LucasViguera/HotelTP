import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  formulario: FormGroup;
  exito: boolean = false;

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



