import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'users', redirectTo: 'home', pathMatch: 'full' },
  { path: 'projects', component: ProjectListComponent, pathMatch: 'full' },
  {
    path: 'project/:projectId',
    children: [
      {
        path: '',
        component: ProjectDetailsComponent,
      },
      {
        path: 'tasks',
        component: TaskListComponent,
      },
      {
        path: 'tasks/:taskId',
        component: TaskDetailsComponent,
      },
    ],
  },
  { path: '**', component: ProjectListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
