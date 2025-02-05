import { Component } from '@angular/core';
<<<<<<< HEAD:anillos/src/app/app.component.ts
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'anillos';
=======
import { MainComponent } from './main/main.component';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'senioranillos';
>>>>>>> 92d535ffcede65ab590a859873c0d084efac720f:senioranillos/src/app/app.component.ts
}
