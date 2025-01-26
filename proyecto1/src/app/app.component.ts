import { Component } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { FormsModule } from '@angular/forms';
import { DatosLibroComponent } from './datos-libro/datos-libro.component';

@Component({
  selector: 'app-hola',
  standalone: true, //no hay modulos, coge uno por dfto
  imports: [
    UserProfileComponent,
    AlumnoComponent,
    FormsModule,
    DatosLibroComponent,
  ], //clases que necesitamos
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Clase de angular';
  nombre: string = 'Estefania';
  edad: number = 18;
  name: string = 'Estefania';
  imgUrl: string =
    'data:image/jpeg;base64,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';

  //checkbox desselecionado
  desseleccionado: boolean = false;

  getEdad(): number {
    return this.edad;
  }

  naranja: string = 'naranja';
  seleccionado = 'true';
  deshabilitado = 'true';
  asignatura = {
    nombre: 'Entorno Servidor',
    codigo: '004R',
  };

  //mostrar alert con click
  mostrarMensaje(): void {
    alert('Mensaje');
  }

  texto: string = 'Antes de pulsar';

  //cambiar texto pulsando checkbnox
  cambiarTexto(texto: any): void {
    this.texto = 'Checkbox pulsado';
  }

  //funcion cambiar sexo segun radio pulsado
  cambiarSexo(value: string): void {
    if (value === 'H') {
      this.texto = 'Hombre';
    } else {
      this.texto = 'Mujer';
    }
  }

  nombreCompy: string = '';
  //DAR VALOR A NOMBRE DENTRO DE FUNCION
  mostrarNombre() {
    this.nombreCompy = 'Inma';
  }

  key: string = '';
  mostrarEtiqueta(event: any) {
    //coge el valor del input y concatena
    this.key += event.target.value + ','; //  .join(',');
  }

  //ejercicios ngmodel--no es necesario event
  contenido: string = '';

  //2
  texto1: string = '';
  texto2: string = '';

  cambiarM(event: any) {
    //cogemos el valor del que ha saltado el evento--txt1
    this.texto2 = event.target.value.toUpperCase();
  }

  cambiarm(event: any) {
    //cogemos el valor del que ha saltado el evento--txt2
    this.texto1 = event.target.value.toUpperCase();
  }

  //recibir datos del padre
  valorHijo: string = '';
  recuperarNombre(palabra: string) {
    this.valorHijo = palabra;
  }
}
