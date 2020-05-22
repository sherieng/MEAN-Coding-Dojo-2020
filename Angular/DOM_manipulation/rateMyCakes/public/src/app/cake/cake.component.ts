import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.scss']
})
export class CakeComponent implements OnInit {
  @Input() cake: any; 
  @Input() avg: number; 

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.cake
    this.avg
  } 
}
