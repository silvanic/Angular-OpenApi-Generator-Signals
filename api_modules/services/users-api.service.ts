/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { inject, Injectable, Injector, Signal } from '@angular/core';
import { toSignal } from "@angular/core/rxjs-interop";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getPostsByUserId } from '../fn/users/get-posts-by-user-id';
import { GetPostsByUserId$Params } from '../fn/users/get-posts-by-user-id';
import { getUserById } from '../fn/users/get-user-by-id';
import { GetUserById$Params } from '../fn/users/get-user-by-id';
import { getUsers } from '../fn/users/get-users';
import { GetUsers$Params } from '../fn/users/get-users';
import { Post } from '../models/post';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UsersApiService extends BaseService {

  private _injector = inject(Injector);

  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getUsers()` */
  static readonly GetUsersPath = '/users';

  /**
   * Get all users.
   *
   * Returns a list of all users in the system
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsers$Response(params?: GetUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
    return getUsers(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all users.
   *
   * Returns a list of all users in the system
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsers(params?: GetUsers$Params, context?: HttpContext): Signal<Array<User>|undefined> {
    return toSignal(this.getUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<User>>): Array<User> => r.body),
    ), {
      injector: this._injector
    });
  }
  /** Path part for operation `getUserById()` */
  static readonly GetUserByIdPath = '/users/{userId}';

  /**
   * Get a user by ID.
   *
   * Returns a single user by ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserById$Response(params: GetUserById$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return getUserById(this.http, this.rootUrl, params, context);
  }

  /**
   * Get a user by ID.
   *
   * Returns a single user by ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserById(params: GetUserById$Params, context?: HttpContext): Signal<User|undefined> {
    return toSignal(this.getUserById$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body),
    ), {
      injector: this._injector
    });
  }
  /** Path part for operation `getPostsByUserId()` */
  static readonly GetPostsByUserIdPath = '/users/{userId}/posts';

  /**
   * Get all posts for a user.
   *
   * Returns a list of all posts for a given user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPostsByUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostsByUserId$Response(params: GetPostsByUserId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Post>>> {
    return getPostsByUserId(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all posts for a user.
   *
   * Returns a list of all posts for a given user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPostsByUserId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostsByUserId(params: GetPostsByUserId$Params, context?: HttpContext): Signal<Array<Post>|undefined> {
    return toSignal(this.getPostsByUserId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Post>>): Array<Post> => r.body),
    ), {
      injector: this._injector
    });
  }
}