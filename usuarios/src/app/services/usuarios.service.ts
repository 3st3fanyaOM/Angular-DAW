import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getUsuariosList(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }
}
