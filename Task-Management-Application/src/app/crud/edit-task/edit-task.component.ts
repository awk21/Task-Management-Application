import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';

interface Status {
  value: string;
  viewValue: string;
}





@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})

export class EditTaskComponent implements OnInit {
  editTaskForm: FormGroup;
  statuses: Status[] = [
    {value: 'Complited', viewValue: 'Complited'},
    {value: 'Incomplited', viewValue: 'Incomplited'},
  ];
  constructor(private _fb: FormBuilder, private _taskService: TaskService, private _router: Router,private _route:ActivatedRoute) {
    this.editTaskForm = this._fb.group({
      title:['', Validators.required],
      description: ['', Validators.required],
      startDate:['', Validators.required],
      dueDate:['', Validators.required],
      status:['', Validators.required],
    }); 
  }

  ngOnInit(): void {
    
    console.warn(this._route.snapshot.params['id']);
    this._taskService.getCurrentTaskDetails(this._route.snapshot.params['id']).subscribe((result)=>{
      this.editTaskForm.patchValue({
        title: result['title'],
        description: result['description'],
        startDate: result['startDate'],
        dueDate: result['dueDate'],
        status:result['status']
      })
      
    })
  }
  onSubmit() {
    if (this.editTaskForm.valid) {
      this._taskService.editTask(this._route.snapshot.params['id'],this.editTaskForm.value).subscribe((result)=>{
        this._router.navigate(['/task-list']);
      })
    }
    
    }
    home(){
      this._router.navigate(['']);
    }
  
}
