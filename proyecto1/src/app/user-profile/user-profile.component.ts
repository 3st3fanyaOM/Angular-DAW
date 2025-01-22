import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  nombre:string = "John Doe"
  role: string ="Usuario"
  titulo:string = "Componente User"
  
}
