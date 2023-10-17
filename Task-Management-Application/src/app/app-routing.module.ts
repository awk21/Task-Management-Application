import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './commons/dashboard/dashboard.component';
import { AddTaskComponent } from './crud/add-task/add-task.component';
import { TaskListComponent } from './crud/task-list/task-list.component';
import { EditTaskComponent } from './crud/edit-task/edit-task.component';


const routes: Routes = [
  {
  path:'',
  component: DashboardComponent,
  },
  {
    path:'add-task',
    component:AddTaskComponent 
  },
  {
    path:'task-list',
    component:TaskListComponent
  },
  {
    path:'edit-task/:id',
    component:EditTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
