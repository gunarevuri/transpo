import { Component, OnInit } from '@angular/core';
import {AppModule} from '../app.module';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {

  constructor() { }
value:string;
Destination:string;
  ngOnInit() {
    this.value="Address"
    this.Destination="Address"
  }

}
