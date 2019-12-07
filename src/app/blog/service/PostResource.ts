import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostResource {
  constructor(private httpClient: HttpClient) { }

}
