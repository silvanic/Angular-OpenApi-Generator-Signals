import {
  Component,
  computed,
  effect,
  inject,
  signal,
  Signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { PostsService } from './posts.service';
import { Post } from '../../api_modules/models';
import { ResponseWithError } from '../../api_modules/api-configuration';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'openapi-generator-signals';

  private postService = inject(PostsService);

  posts: Signal<ResponseWithError<Post[]>> = signal(null);
  post: Signal<ResponseWithError<Post>> = signal(null);

  constructor() {
    effect(() => {
      if (this.posts() && this.posts()?.error) {
        console.error('ERREUR EFFECT', this.posts());
      }
    });
  }

  ngOnInit(): void {
    // this.posts = this.postService.getPosts();
  }

  refresh() {
    this.post = this.postService.getPostById(
      Math.floor(Math.random() * 10).toString()
    );
  }
}
