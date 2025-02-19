import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/Post';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  url: string = 'https://jsonplaceholder.typicode.com/posts';
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }
}
