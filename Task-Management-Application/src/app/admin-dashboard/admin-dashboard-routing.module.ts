import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardAdminComponent
  },
  {
    path:'task',
    loadChildren:()=>import('../crud/crud.module')
    .then(mod=>mod.CrudModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
