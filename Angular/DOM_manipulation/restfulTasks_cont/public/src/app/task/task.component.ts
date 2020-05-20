import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() updatedtask: any;
  @Output() taskupdated = new EventEmitter();

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
  }  

  onUpdate(editid:string){
    let observable = this._httpService.updateTask(editid, this.updatedtask); 
    observable.subscribe(data => {
      console.log("Updated task", data)
      this.taskupdated.emit(true)
    })
  }

}
