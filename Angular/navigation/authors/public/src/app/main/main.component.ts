import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  authors: any = [];
  deleteauthor: any; 

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.showAllAuthors()
  }

  showAllAuthors(){
    let observable = this._httpService.showAuthors();
    observable.subscribe(data => {
        console.log("Show authors", data)
        this.authors = data
    })
  }

    onDelete(id:string){
      let observable = this._httpService.deleteAuthor(id);
      observable.subscribe(data => {
        console.log("delete", data)
        this.deleteauthor = data;
        this.showAllAuthors()
      })
    }
}
