import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectsShowComponent } from './subjects-show/subjects-show.component';
import { HomeComponent } from './home/home.component';
import { AverageComponent } from './average/average.component';

@NgModule({
 imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'subjects-list', component: SubjectListComponent},
      {path: 'subjects-show/:semestre/:materia', component: SubjectsShowComponent},
      {path: 'average', component: AverageComponent},
    ]),
    NgxPaginationModule 
  ],
  declarations: [ AppComponent, HelloComponent, SubjectListComponent, SubjectsShowComponent, HomeComponent, AverageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
