import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
      title: '',
      description: '',
      dueDate: '',
      status:''
    })
  }

  ngOnInit(): void {
    
    console.warn(this._route.snapshot.params['id']);
    this._taskService.getCurrentTaskDetails(this._route.snapshot.params['id']).subscribe((result)=>{
      this.editTaskForm = this._fb.group({
        title: result['title'],
        description: result['description'],
        dueDate: result['dueDate'],
        status:result['status']
      })
      
    })
  }
  onSubmit() {

      this._taskService.editTask(this._route.snapshot.params['id'],this.editTaskForm.value).subscribe((result)=>{
        this._router.navigate(['/task-list']);
      })

    }
    home(){
      this._router.navigate(['']);
    }
  
}
