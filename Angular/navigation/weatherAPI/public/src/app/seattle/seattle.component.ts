import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.scss']
})
export class SeattleComponent implements OnInit {
  seattle: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.seattleWeather()
  }

  seattleWeather(){
    let observable = this._httpService.seattle();
    observable.subscribe(data => {
      console.log("seattle", data)
      this.seattle = data;
    })
  }
}
