import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: any;
  @Output() statusChanged = new EventEmitter<Task>();
  @Output() onDeleteTask = new EventEmitter<Task>();

  constructor(private router: Router){}
  deleteTask(event: MouseEvent) {
    console.log('delete task:', event);
    this.onDeleteTask.emit(this.task);
  }
  toggleDone() {
    this.task.completed = !this.task.completed 
    this.statusChanged.emit(this.task);
  }
  editTask(){}

}
