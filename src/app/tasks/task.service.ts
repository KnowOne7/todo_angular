import { Injectable } from '@angular/core';
import { NewTask } from './new-task.dto';
import { TaskItem } from './task-item.dto';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor() { }

  private tasks: TaskItem[] = [
    new TaskItem("Visit Ann"),
    new TaskItem("Call Dad"),
    new TaskItem("Go to the Gym"),
    new TaskItem("Wash the Dishes"),
    new TaskItem("Shop for a Party")
  ]

  getAllTasks(): ReadonlyArray<TaskItem>{
    
    return this.tasks;

  }

  addTask(newTask: NewTask){
    this.tasks.push(new TaskItem(newTask.title))

  }

  removeTask(existingTask: TaskItem){
    this.tasks = this.tasks.filter(task => task != existingTask)

  }
}
