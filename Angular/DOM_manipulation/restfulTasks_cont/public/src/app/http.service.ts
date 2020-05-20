import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
  }

  getTasks(){
    return this._http.get('/tasks')
  }

  createTask(newtask){
    return this._http.post('/tasks', newtask)
  }

  showTask(id){
      return this._http.get('tasks/' + id)
  }

  editTask(id){
    return this._http.get('tasks/' + id)
  }

  updateTask(id, updatetask){
    return this._http.put('tasks/' +id, updatetask)
  }

  deleteTask(id){
    return this._http.delete('tasks/' + id)
  }
}



