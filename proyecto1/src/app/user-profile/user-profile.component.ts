import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  @Input() //entrada--recibe del padre
  nombre: string = 'John Doe';
  @Input() //entrada--recibe del padre
  role: string = 'Usuario';
  edad: number = 33;

  //pasar del pa
  @Output()
  selected = new EventEmitter<string>();
  seleccionar(){
    this.selected.emit(this.nombre);
  }
 

  titulo: string = 'Componente User';
}
