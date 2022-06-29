import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PostData } from '../models/postData.model';
@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {
  @Output() postMaker = new EventEmitter<PostData>()
  username: string = "";
  comment = "";

  constructor() { }

  ngOnInit(): void {
  }

  posterClicked (){
    this.postMaker.emit({
      username:this.username,
      comment:this.comment
    })
    this.username=""
    this.comment=""
  }

}
