import { ResponseWithError } from './../../api_modules/api-configuration';

import { Post } from '../../api_modules/models';
import { PostsApiService } from '../../api_modules/services/posts-api.service';
import { inject, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  postsService: PostsApiService = inject(PostsApiService);

  getPosts(): Signal<ResponseWithError<Array<Post>>> {
    return this.postsService.getPosts();
  }

  getPostById(id: string): Signal<ResponseWithError<Post>> {
    return this.postsService.getPostById({ id });
  }
}
