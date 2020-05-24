import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'; 

@Component({
  selector: 'app-show-q',
  templateUrl: './show-q.component.html',
  styleUrls: ['./show-q.component.scss']
})
export class ShowQComponent implements OnInit {
  id: number;
  quotes: any;
  quote: any;
  vote: any;  
  voteD: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = params['id'], console.log(this.id)
    })
    this.showAllQuotes(this.id)
  }

  showAllQuotes(id){
    this.quotes = {name: ""}
    let observable = this._httpService.showAnAuthor(id);
    observable.subscribe(data => {
      console.log("show an author", data)
      this.quotes = data
    })
  }

  onDelete(quote){
    console.log(quote)
    let observable = this._httpService.deleteQuote(quote._id, this.id);
    observable.subscribe(data => {
      console.log("delete", data)
      this.showAllQuotes(this.id)
    })
  }

  onUpVote(quote){
    this.quote = {quote: ""}
    let observable = this._httpService.upVote(quote, this.id);
    observable.subscribe(data => {
      this.vote = data
      console.log(this.vote)
      this.showAllQuotes(this.id)
    })
  }

  onDownVote(quote){
    this.quote = {quote: ""}
    let observable = this._httpService.downVote(quote, this.id);
    observable.subscribe(data => {
      this.voteD = data
      console.log(this.voteD)
      this.showAllQuotes(this.id)
    })
  }
}
