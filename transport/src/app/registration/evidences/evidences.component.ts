import { Component, OnInit } from '@angular/core';
import {routingComponents} from '../../app-routing.module';
import {Form}from '@angular/forms';
// import {UserDetails} from '../../usersdetails'

import { Router } from '@angular/router';

@Component({
  selector: 'app-evidences',
  templateUrl: './evidences.component.html',
  styleUrls: ['./evidences.component.css']
})
export class EvidencesComponent implements OnInit {

  constructor() { }
  vehicleNumber:any;
  adharNumber:number;
  licenceNumber:number;


  ngOnInit() {
    this.vehicleNumber=233;
    this.adharNumber=504728743150;
    this.licenceNumber=983798375;
  }
}