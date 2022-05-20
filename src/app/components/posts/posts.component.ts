import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient} from "@angular/common/http";
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

// interface Post {
//   author: string;
//   authorId:string;
//   iconUrl:string;
//   longDescription:string;
//   url:string;
// }

export class PostsComponent implements OnInit {

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {

    
  }

    writerUrl = "https://api.assessment.skillset.technology/a74fsg46d/posts?";
    getPosts(): Observable<any> {
          return this.http.get(this.writerUrl, {responseType: 'json'}).subscribe();
    } 

}
