import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-giph',
  templateUrl: './giph.component.html',
  styleUrls: ['./giph.component.css']
})
export class GiphComponent implements OnInit {
  trendingLink:string="http://api.giphy.com/v1/gifs/trending?&api_key=o3ZsTHsuMZAHVh4VXVSY0c6hkxkBJwcC&limit=30"
  giphies:any
  constructor(private http:HttpClient){ 

  }

  ngOnInit() {
    this.http.get(this.trendingLink).subscribe((response:any)=>{
      this.giphies=response.data
      console.log(response.data)
    })
  }

}
