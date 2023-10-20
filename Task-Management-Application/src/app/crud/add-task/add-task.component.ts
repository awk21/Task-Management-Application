import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

interface Status {
  value: string;
  viewValue: string;
}
function dateComparisonValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const startDate = control.get('startDate')?.value;
  const dueDate = control.get('dueDate')?.value;

  if (!dueDate) {
    control.get('dueDate')?.setErrors({ required: true });
    return null;
  }

  if (startDate && dueDate && startDate > dueDate) {
    control.get('dueDate')?.setErrors({ dateComparison: true });
  } else {
    control.get('dueDate')?.setErrors(null);
  }

  return null;
}

function isValidDate(control: AbstractControl): { [key: string]: boolean } | null {
  const dateValue = control.value;

  if (dateValue) {
    if (isNaN(Date.parse(dateValue))) {
      return { invalidDate: true };
    }
  }

  return null;
}
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskForm: FormGroup;
  statuses: Status[] = [
    {value: 'Complited', viewValue: 'Complited'},
    {value: 'Incomplited', viewValue: 'Incomplited'},
  ];
  constructor(private _fb: FormBuilder, private _taskService: TaskService, private _router: Router) {
    this.taskForm = this._fb.group({
      title:['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', [Validators.required, isValidDate]],
      dueDate: ['', [Validators.required, isValidDate]],
      status:['', Validators.required],

    },
    { validators: [dateComparisonValidator] }
    )
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
  updateDateControls() {
    this.taskForm.updateValueAndValidity();
  }
  
}
