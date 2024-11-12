/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { inject, Injectable, Injector, Signal } from '@angular/core';
import { toSignal } from "@angular/core/rxjs-interop";
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration, ResponseWithError } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getPostById } from '../fn/posts/get-post-by-id';
import { GetPostById$Params } from '../fn/posts/get-post-by-id';
import { getPosts } from '../fn/posts/get-posts';
import { GetPosts$Params } from '../fn/posts/get-posts';
import { Post } from '../models/post';

@Injectable({ providedIn: 'root' })
export class PostsApiService extends BaseService {

  private _injector = inject(Injector);

  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getPosts()` */
  static readonly GetPostsPath = '/posts';

  /**
   * Get all posts.
   *
   * Returns a list of all posts in the system
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPosts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPosts$Response(params?: GetPosts$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Post>>> {
    return getPosts(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all posts.
   *
   * Returns a list of all posts in the system
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPosts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPosts(params?: GetPosts$Params, context?: HttpContext): Signal<ResponseWithError<Array<Post>>> {
    return toSignal(this.getPosts$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Post>>): ResponseWithError<Array<Post>> => ({ data: r.body })),
      catchError((error) => of({data: null, error: error}))
    ), {
      injector: this._injector,
      initialValue: null
    });
  }
  /** Path part for operation `getPostById()` */
  static readonly GetPostByIdPath = '/posts/{id}';

  /**
   * Get a post by ID.
   *
   * Returns a single post by ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPostById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostById$Response(params: GetPostById$Params, context?: HttpContext): Observable<StrictHttpResponse<Post>> {
    return getPostById(this.http, this.rootUrl, params, context);
  }

  /**
   * Get a post by ID.
   *
   * Returns a single post by ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPostById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostById(params: GetPostById$Params, context?: HttpContext): Signal<ResponseWithError<Post>> {
    return toSignal(this.getPostById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Post>): ResponseWithError<Post> => ({ data: r.body })),
      catchError((error) => of({data: null, error: error}))
    ), {
      injector: this._injector,
      initialValue: null
    });
  }
}