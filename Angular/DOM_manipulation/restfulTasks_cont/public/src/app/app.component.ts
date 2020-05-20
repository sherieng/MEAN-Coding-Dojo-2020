import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = "Restful Tasks"
  tasks: any = [];
  tsk: any
  newTask: any;
  deletetask: any = []
  updatedtask: any = false;

  constructor(private _httpService: HttpService){}
  
  ngOnInit(){
    this.newTask = {title: "", description: ""};
  }
  
  //show ALL tasks 
  onClickShowTasks(){
  let observable = this._httpService.getTasks();
  observable.subscribe(data => {
      console.log("Got our tasks in component!", data)
      this.tasks = data;
    })
  }

  //show A task
  onClickShowTask(id:string){
    let observable = this._httpService.showTask(id);
    observable.subscribe(data => {
      console.log("show", data)
      this.tsk = data;
    })
  }  
  //create task
  onSubmit(){
    let observable = this._httpService.createTask(this.newTask); 
    observable.subscribe(data => {
      console.log("Got our data back from post!", data)
      this.newTask = {title: "", description: ""};
      this.onClickShowTasks()
    })
  }
  
  //show edit 
  onClickEditTask(id:string){
    this.updatedtask = {title: " ", description: " "}
    let observable = this._httpService.editTask(id);
    observable.subscribe(data => {
      console.log("edit", data)
      this.updatedtask = data;
    })
  }

  //
  tasksupdated(event:boolean){
    this.onClickShowTasks()
  }

  //delete task
  onDelete(id:string){
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data => {
      console.log("delete", data)
      this.deletetask = data;
      this.onClickShowTasks()
    })
  }

  
}

