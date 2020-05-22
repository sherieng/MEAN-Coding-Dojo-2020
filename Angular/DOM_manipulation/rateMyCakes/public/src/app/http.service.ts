import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
  }

  showCakes(){
    return this._http.get('/cakes')
  }

  createCake(newCake){
    return this._http.post('/cakes', newCake)
  }

  createRating(newRating, cakeID){
    console.log(newRating, cakeID)
    return this._http.post(`/rating/${cakeID}`, newRating)
  }

  showCake(id){
    return this._http.get('/cakes/' + id)
  }

}