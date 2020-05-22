import { Component, OnInit} from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Rate My Cakes'
  newCake: any;
  cakes: any = [];
  newRating: any;
  selectedCake: any;
  average: any; 

  constructor(private _httpService: HttpService){}
  
  ngOnInit(){
    this.newCake = {name: "", url: ""};
    this.newRating = {rating: 5, comment: ""};
    this.showAllCakes()
  }

  showAllCakes(){
    let observable = this._httpService.showCakes();
    observable.subscribe(data => {
        console.log("Show cakes", data)
        //@ts-ignore 
        for(let cake of data){
          cake.newRating =  {rating: 5, comment: ""};
          this.cakes.push(cake)
        }
      })
    }

  onSubmit(){
    let observable = this._httpService.createCake(this.newCake); 
    observable.subscribe(data => {
      console.log("Created a new cake", data)
      this.showAllCakes()
    })
  }

  onSubmitRating(cake){
    let observable = this._httpService.createRating(cake.newRating, cake._id); 
    observable.subscribe(data => {
      console.log("Created a rating", data)
    })
  }

  showACake(cakeID){
    let observable = this._httpService.showCake(cakeID);
    observable.subscribe(data => {
        console.log("Show a cake", data)
        this.selectedCake = data;
    
      var sum =0; 
      for(let c of this.selectedCake.ratings){
        console.log(c.rating)
        sum += c.rating
        console.log(sum)
      }
      this.average = (sum/this.selectedCake.ratings.length).toFixed(2)
      console.log(this.average)
    })
  }
}
