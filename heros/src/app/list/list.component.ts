import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  heros = ['Wonder Woman', 'Batman', 'Superman'];
  deleted: boolean = false;

  borrarUltimo() {
    this.heros.pop();
    this.deleted = true;
  }

  lastHero = this.heros.at(-1);
}
