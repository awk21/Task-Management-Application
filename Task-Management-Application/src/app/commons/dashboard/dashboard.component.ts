import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  task = "Add Task"
  taskList="Task List"
  login="Login"
  signUp="Sign Up"
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

}
