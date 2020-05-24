import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'; 

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
  updateAuthor: any;
  showAnAuthor: any; 
  error: any;
  id: number;
  
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(){
    this._route.params.subscribe(params => {
      this.id = params['id'], console.log(params['id'])
    })
    this.showOneAuthor(this.id)
  }

  showOneAuthor(id){
    this.showAnAuthor = {name: ""}
    let observable = this._httpService.showAnAuthor(id);
    observable.subscribe(data => {
      console.log("show an author", data)
      this.showAnAuthor = data;
    })
  }

  onSubmit(authorID){
    let observable = this._httpService.updateAuthor(authorID, this.showAnAuthor);
    observable.subscribe(data => {
      this.error = data['errors']
      console.log(data['error'])
      if (!this.error){
        this._router.navigate(['/main'])
      }
    })
  }
}
