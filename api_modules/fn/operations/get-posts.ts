/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Post } from '../../models/post';

export interface GetPosts$Params {
}

export function getPosts(http: HttpClient, rootUrl: string, params?: GetPosts$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Post>>> {
  const rb = new RequestBuilder(rootUrl, getPosts.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Post>>;
    })
  );
}

getPosts.PATH = '/posts';
