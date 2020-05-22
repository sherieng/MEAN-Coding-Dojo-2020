import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.scss']
})
export class SanJoseComponent implements OnInit {
  sanjose: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.sanjoseWeather()
  }

  sanjoseWeather(){
    let observable = this._httpService.sanjose();
    observable.subscribe(data => {
      console.log("sanjose", data)
      this.sanjose = data;
    })
  }

}
