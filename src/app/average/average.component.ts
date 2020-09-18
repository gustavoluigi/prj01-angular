import { Component, OnInit } from "@angular/core";

import { content } from "../content";

@Component({
  selector: "app-average",
  templateUrl: "./average.component.html",
  styleUrls: ["./average.component.css"]
})
export class AverageComponent implements OnInit {
  list = content;
  mediaGeral;
  materiasCursadas

  constructor() {
  }

  ngOnInit() {

      let qtMaterias = 0;
      let mediaGustavo = 0;
      let mediaRaul = 0;
      this.list.forEach(function(semestre) {
        qtMaterias += semestre.grade.gustavo.length;

        console.log(semestre.grade.gustavo == [0] ? 'teste' : 'testew')

        let notasGustavo = semestre.grade.gustavo.reduce((a, b) => a + b, 0);
        mediaGustavo += notasGustavo;

        let notasRaul = semestre.grade.raul.reduce((a, b) => a + b, 0);
        mediaRaul += notasRaul;
      });
      this.mediaGeral = (mediaGustavo / qtMaterias + mediaRaul / qtMaterias) / 2;

      this.materiasCursadas = qtMaterias;
  }
}
