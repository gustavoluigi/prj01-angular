import { Component, OnInit } from '@angular/core';

import { content } from '../content'

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

 public paginaAtual = 1; 

  list = content;

  constructor() { }

  ngOnInit() {
  }

}