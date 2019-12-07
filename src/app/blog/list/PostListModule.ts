import { MatCardModule, MatButtonModule, MatCommonModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { PostListComponent } from './PostListComponent';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
  ],
  exports: [
    PostListComponent
  ],
  declarations: [
    PostListComponent
  ],
  providers: [],
})
export class PostListModule { }
