import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: 'postList.html'
})

export class PostListComponent implements OnInit {
  public postList = postList;
  constructor() { }

  ngOnInit() { }
}

const postList = [
  {
    title: "Bismillahir Rahmanir Rahim",
    subTitle: "This is the subtitle of this demo card. I am still learning these",
    imageUrl: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    content: "This is just a content. This is just a content. This is just a content. This is just a content. This is just a content. This is just a content. This is just a content."
  },
  {
    title: "Bismillahir Rahmanir Rahim",
    subTitle: "This is the subtitle of this demo card. I am still learning these",
    imageUrl: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    content: "This is just a content. This is just a content. This is just a content. This is just a content. This is just a content. This is just a content. This is just a content."
  },
  {
    title: "Bismillahir Rahmanir Rahim",
    subTitle: "This is the subtitle of this demo card. I am still learning these",
    imageUrl: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    content: "This is just a content. This is just a content. This is just a content. This is just a content. This is just a content. This is just a content. This is just a content."
  },
  {
    title: "Bismillahir Rahmanir Rahim",
    subTitle: "This is the subtitle of this demo card. I am still learning these",
    imageUrl: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    content: "This is just a content. This is just a content. This is just a content. This is just a content. This is just a content. This is just a content. This is just a content."
  },

]
