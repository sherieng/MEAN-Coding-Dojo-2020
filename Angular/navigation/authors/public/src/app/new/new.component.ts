import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'; 

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  newAuthor: any; 
  error: any; 
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newAuthor = {name: ""}
  }

  onSubmit(){
    let observable = this._httpService.createAuthor(this.newAuthor);
    observable.subscribe(data => {
      console.log("create an author", data)
      this.error = data['errors']
      if (!this.error){
        this._router.navigate(['/main'])
      }   
    })
  }
}
