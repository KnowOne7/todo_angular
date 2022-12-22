import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule } from './calendar/calendar.module';
import { TaskService } from './tasks/task.service';
// import { TasklistComponent } from './tasklist/tasklist.component';
import { TasksModule } from './tasks/tasks.module';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    // TasklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TasksModule,
    CalendarModule,
    // BrowserAnimationsModule,
    
  ],
  providers: [
    TaskService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
