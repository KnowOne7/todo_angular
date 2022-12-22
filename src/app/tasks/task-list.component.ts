import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { NewTask } from './new-task.dto';
import { TaskItem } from './task-item.dto';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],

})
export class TasklistComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private taskService: TaskService) {}

  // taskService = new TaskService();
  tasks = this.taskService.getAllTasks();

  newTaskTitle: string ="";

  newTask: NewTask = new NewTask();

  

  ngOnInit(): void{
    // this.date = new Date(this.route.snapshot.params['date']);
    var strDate = this.route.snapshot.params['date'];
    this.newTask = new NewTask(this.newTask.title, new Date(strDate));
   
  }
  title = "new title";



  add(taskNgForm: NgForm){
    // alert(newTask)
    if(taskNgForm.touched == false)
      return;

    this.taskService.addTask(this.newTask);
    taskNgForm.reset({date: this.newTask.date})

  }

  remove(existingTask: TaskItem){
    var userConfirmed = confirm(`Are you sure you want to remove the folloiwng task? \n "${existingTask.title}"`)
    if(userConfirmed){
      this.taskService.removeTask(existingTask);
    }

  }

  // markDone(task:Task){
  //   //var userConfirmed = confirm(`Is ${task} complete?`)
  //   task.isDone = true
    


  // }
}


