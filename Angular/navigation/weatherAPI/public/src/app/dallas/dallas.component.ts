import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.scss']
})
export class DallasComponent implements OnInit {
  dallas: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.dallasWeather()
  }

  dallasWeather(){
    let observable = this._httpService.dallas();
    observable.subscribe(data => {
      console.log("dallas", data)
      this.dallas = data;
    })
  }

}
