import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  task = "Add Task"
  taskList="Task List"
  constructor( private _router: Router) { }

  ngOnInit(): void {
  }
  navigation(){
    this._router.navigate(['admin/dashboardAdmin/dashboard/task/addTask']);
  }
}
