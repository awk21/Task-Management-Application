import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _fb: FormBuilder, private _taskService: TaskService, private _router: Router) { 

    this.loginForm = this._fb.group({
      userId:['', Validators.required],
      password: ['', Validators.required],
    },
    )
  }

  ngOnInit(): void {
  }

  onSubmit(){}
  home(){
    this._router.navigate(['']);
  }
}
