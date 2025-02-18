import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) {}
  url: string='https://jsonplaceholder.typicode.com/users';

  getUsuarios(){
    return this.http.get(this.url);
  }
}
