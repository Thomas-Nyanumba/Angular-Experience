import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EditTaskComponent } from './component/edit-task/edit-task.component';

const routes: Routes = [
  { path: '', component: TasksComponent},
  { path: 'login', component: LoginComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'edit-task/:id', component: EditTaskComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
