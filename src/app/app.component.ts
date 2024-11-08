import { Component, inject, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsApiService } from '../../api_modules/services';
import { JsonPipe } from '@angular/common';
import { Post } from '../../api_modules/models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'openapi-generator-signals';

  private postService = inject(PostsApiService);
  posts!: Signal<Array<Post> | undefined>;

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }
}
