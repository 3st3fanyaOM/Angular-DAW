import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';
import { Post } from '../model/Post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  listaPosts?: Observable<Post[]>;
  constructor(private postService: PostService) {}

  mostrarPosts() {
    this.listaPosts = this.postService.getPosts();
  }
}
