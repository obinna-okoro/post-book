import { Component } from '@angular/core';
import { PostData } from './models/postData.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  postLists = []

  poster(postData:PostData){
    this.postLists.push({
      username: postData.username,
      comment: postData.comment
    }) 
    
  }
}
