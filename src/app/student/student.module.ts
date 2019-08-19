import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentListItemComponent } from './student-list-item/student-list-item.component';
import { routing } from './student.routing';



@NgModule({
  declarations: [StudentComponent, StudentListComponent, StudentListItemComponent],
  imports: [
    CommonModule,
    routing
  ]
})
export class StudentModule { }
