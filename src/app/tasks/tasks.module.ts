import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasklistComponent } from './task-list.component';
import { MatDatepickerModule} from '@angular/material/datepicker' ;
import { FormsModule } from '@angular/forms';
import { TaskService } from './task.service';



@NgModule({
  declarations: [
    TasklistComponent
  ],
  providers: [TaskService],
  
  imports: [
    CommonModule,
    MatDatepickerModule,
    FormsModule
  ],
  exports: [
    TasklistComponent
  ]
})
export class TasksModule { }
