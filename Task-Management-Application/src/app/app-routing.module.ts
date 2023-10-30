import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './commons/dashboard/dashboard.component';
import { TaskListComponent } from './crud/task-list/task-list.component';
import { EditTaskComponent } from './crud/edit-task/edit-task.component';
import { AddTaskComponent } from './crud/add-task/add-task.component';


const routes: Routes = [
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module')
    .then(mod=>mod.AdminModule)
  },
  // {
  //   path:'admin/dashboard',
  //   loadChildren:()=>import('./admin-dashboard/admin-dashboard.module')
  //   .then(mod=>mod.AdminDashboardModule)
  // },
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
