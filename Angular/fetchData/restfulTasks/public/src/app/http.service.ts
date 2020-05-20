import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getTasks();
    this.showTasks();
  }

  getTasks(){
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }


  showTasks(){
      let tempObservable = this._http.get('tasks/', { params:{id: "5ec2e013ac35081e6c86e40e"}})
      tempObservable.subscribe(data => console.log("Showing a task!", data));
  }

  deleteTasks(){
    let tempObservable = this._http.get('tasks/', { params:{id: "5ec2e013ac35081e6c86e40e"}})
    tempObservable.subscribe(data => console.log("Deleting a task!", data));
  }
}



