import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  editTaskForm!: FormGroup;
  taskId!: string;
  task: Task = {
    title: '',
    description: '',
    completed: false,
    date: ''
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private taskService: TasksService
  ) {}

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id') || '';
    this.loadTask();
  }

  // initForm() {
  //   this.editTaskForm = this.fb.group({
  //     title: ['', Validators.required],
  //     description: ['', Validators.required],
  //     completed: [false, Validators.required],
  //     date: ['', Validators.required]
  //   });
  // }

  loadTask() {
    this.taskService.getTaskById(this.taskId).subscribe((task) => {
      this.task=task
    });
  }

  saveChanges() {
      this.taskService.updateTask(this.task).subscribe(() => {
        this.router.navigate(['/']);
      });
  }

  cancelEdit() {
    this.router.navigate(['/']);
  }
}
