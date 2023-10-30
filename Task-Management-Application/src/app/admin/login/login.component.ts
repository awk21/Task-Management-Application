import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _fb: FormBuilder, private _router: Router, private _authService:AuthService) { 

    this.loginForm = this._fb.group({
      userId:['', Validators.required],
      password: ['', Validators.required],
    },
    )
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.loginForm.valid) {
      const { userId, password } = this.loginForm.value;
      this._authService.login(userId, password).subscribe((user) => {
        if (user) {
          // Login successful
          alert("Login successful")
          this._router.navigate(['admin/dashboardAdmin/dashboard']); // Navigate to a dashboard or protected route
        } else {
          alert("Login Faild")

        }
      });
    }
  }
  home(){
    this._router.navigate(['']);
  }
}
