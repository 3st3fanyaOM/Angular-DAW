import { Component, OnInit } from '@angular/core';
import { Serie } from '../model/Serie';
import { Observable } from 'rxjs';
import { SerieService } from '../services/serie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-serie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './serie.component.html',
  styleUrl: './serie.component.css',
})
export class SerieComponent implements OnInit {
  serie = new Observable<Serie>();

  constructor(private service: SerieService) {}

  ngOnInit(): void {
    this.serie = this.service.getSerie();
  }
}
