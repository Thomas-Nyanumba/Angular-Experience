import { Component } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  task = {
    title: '',
    description: '',
    date: '',
    completed: false,
  }

  minDate: string = new Date().toISOString().split('T')[0]; // Today's date

  constructor( private taskService: TasksService, private router: Router) {}


  onSubmit() {
    console.log('Form task:', this.task);
    this.taskService.addTask(this.task).subscribe(() => {
      console.log('Task added');

  }
)
  this.router.navigate(['/']); // Redirect to task list page

}}
