import { Component, Input, OnInit } from '@angular/core';
import { PostData } from '../models/postData.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() aPost:PostData;

  constructor() { }

  ngOnInit(): void {
  }

}
