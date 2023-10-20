import { Component, OnInit, ViewChild} from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';




@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'description','startDate', 'dueDate','status','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _taskService:TaskService,private _router: Router) { }

  ngOnInit(): void {
    this.getTaskList();
  }
  getTaskList(){
    this._taskService.getTaskDetails().subscribe({
      next:(res: any)=> {
        this.dataSource =new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        
      },
      error: (err)=>{
        console.log(err);
        
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteTask(id: number){
    this._taskService.deleteTaskDetails(id).subscribe({
      next:(res)=> {
        this.getTaskList();
      },
      error: (err)=>{
        console.log(err);
        
      }
    })
  }
  home(){
    this._router.navigate(['']);
  }
  onDrop(event: CdkDragDrop<any[]>) {
    const data = this.dataSource.data;
    moveItemInArray(data, event.previousIndex, event.currentIndex);
    this.dataSource.data = [...data];
  }
}
