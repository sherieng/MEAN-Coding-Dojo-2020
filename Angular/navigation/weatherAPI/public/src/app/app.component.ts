import { Component } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'public';
  // dallas: any;

  constructor(private _httpService: HttpService){}

  ngOnInit(){}

  // dallasWeather(){
  //   let observable = this._httpService.dallas();
  //   observable.subscribe(data => {
  //     console.log("dallas", data)
  //     this.dallas = data;
  //   })
  // }

}
