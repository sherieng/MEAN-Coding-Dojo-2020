import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.dallas();
  }

  dallas(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?zip=75204,us&units=imperial&appid=927e2298344365b4631d0a292897a579')
  }

  burbank(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?zip=91501,us&units=imperial&appid=927e2298344365b4631d0a292897a579')
  }

  chicago(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?zip=60608,us&units=imperial&appid=927e2298344365b4631d0a292897a579')
  }

  sanjose(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?zip=95113,us&units=imperial&appid=927e2298344365b4631d0a292897a579')
  }

  seattle(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?zip=98103,us&units=imperial&appid=927e2298344365b4631d0a292897a579')
  }

  washington(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?zip=20001,us&units=imperial&appid=927e2298344365b4631d0a292897a579')
  }
}
