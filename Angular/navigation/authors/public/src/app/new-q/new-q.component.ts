import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'; 

@Component({
  selector: 'app-new-q',
  templateUrl: './new-q.component.html',
  styleUrls: ['./new-q.component.scss']
})
export class NewQComponent implements OnInit {
  newQuote: any;
  error: any; 
  authorID: any; 

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.authorID = params['id'], console.log(this.authorID)
    })
    this.newQuote = {quote:""}
  }

  onSubmit(){
    let observable = this._httpService.createQuote(this.newQuote,this.authorID);
    observable.subscribe(data => {
      console.log("create a quote", data)
      this.error = data['errors']
      if (!this.error){
        this._router.navigate(['/show-q/' + this.authorID])
      }   
    })
  }
}
