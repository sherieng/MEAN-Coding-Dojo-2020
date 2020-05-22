import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.scss']
})
export class ChicagoComponent implements OnInit {
  chicago: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.chicagoWeather()
  }

  chicagoWeather(){
    let observable = this._httpService.chicago();
    observable.subscribe(data => {
      console.log("chicago", data)
      this.chicago = data;
    })
  }
}
