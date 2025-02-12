import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
 
  private url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getUsersList(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }
  
  obtenerUsuarioPorId(id: number): Observable<Usuario> | undefined {
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }
}
