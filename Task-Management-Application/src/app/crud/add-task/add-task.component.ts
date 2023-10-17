import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskForm: FormGroup;
  constructor(private _fb: FormBuilder, private _taskService: TaskService, private _router: Router) {
    this.taskForm = this._fb.group({
      title: '',
      description: ''
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.taskForm.valid) {
      console.log(this.taskForm.value);
      this._taskService.AddTask(this.taskForm.value).subscribe({
        next: (val: any) => {
          this._router.navigate(['/task-list']);

        },
        error: (err) => {
          console.log(err);

        }
      })

    }
  }
  home(){
    this._router.navigate(['']);
  }
}
