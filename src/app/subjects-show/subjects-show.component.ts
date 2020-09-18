import { Component, OnInit } from '@angular/core';

import { content } from '../content'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subjects-show',
  templateUrl: './subjects-show.component.html',
  styleUrls: ['./subjects-show.component.css']
})
export class SubjectsShowComponent implements OnInit {

materia;
notaGustavo;
notaRaul;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.materia = content[params.get('semestre')].subjects[params.get('materia')];
      this.notaGustavo = content[params.get('semestre')].grade.gustavo[params.get('materia')]
      this.notaRaul = content[params.get('semestre')].grade.raul[params.get('materia')]
    }
    );
  }


}