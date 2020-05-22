import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.scss']
})
export class WashingtonComponent implements OnInit {
  washington: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.washingtonWeather()
  }

  washingtonWeather(){
    let observable = this._httpService.washington();
    observable.subscribe(data => {
      console.log("washington", data)
      this.washington = data;
    })
  }
}
