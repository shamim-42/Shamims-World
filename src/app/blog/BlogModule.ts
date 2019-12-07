import { PostListModule } from './list/PostListModule';
import { PostService } from './service/PostService';
import { PostResource } from './service/PostResource';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    PostListModule,
  ],
  exports: [
    PostListModule,
  ],
  declarations: [],
  providers: [
    PostResource,
    PostService
  ],
})
export class BlogModule { }
