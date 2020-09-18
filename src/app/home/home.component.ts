import { Component, OnInit } from '@angular/core';

import { students } from '../students'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  members = students;

  constructor() { }

  ngOnInit() {
  }

}