import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) {}
  url: string='https://jsonplaceholder.typicode.com/users';

  getUsuario(numUsuario:number):Observable<Usuario>{
    console.log(`Buscando usuario con ID: ${numUsuario}`); 
    return this.http.get<Usuario>(this.url+'/'+numUsuario);
  }
}
