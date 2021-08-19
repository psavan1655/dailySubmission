import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newbio',
  templateUrl: './newbio.component.html',
  styleUrls: ['./newbio.component.css']
})
export class NewbioComponent implements OnInit {
  post = '';
  AddPostparent: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  AddPost(post: any) {
    console.log(post);
    this.AddPostparent.push(post);
  }

}
