/* tslint:disable */
/* eslint-disable */

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'https://jsonplaceholder.typicode.com';
}

/**
 * Parameters for `ApiModule.forRoot()`
 */
export interface ApiConfigurationParams {
  rootUrl?: string;
}

export type ResponseWithError<T> = {
  data: T | null;
  error?: HttpErrorResponse;
} | null;
