import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.scss']
})
export class BurbankComponent implements OnInit {
  burbank: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.burbankWeather()
  }

  burbankWeather(){
    let observable = this._httpService.burbank();
    observable.subscribe(data => {
      console.log("burbank", data)
      this.burbank = data;
    })
  }

}


