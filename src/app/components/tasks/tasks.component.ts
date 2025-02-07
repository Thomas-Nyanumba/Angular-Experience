import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TasksService } from 'src/app/services/tasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent  implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TasksService) { }

ngOnInit(): void {
  this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
}
updateTaskStatus(task: any) {
  this.taskService.updateTask(task).subscribe();
}
taskDeleted(task: any) {
  this.taskService.deleteTask(task).subscribe(() => {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
  }); 
}
}
