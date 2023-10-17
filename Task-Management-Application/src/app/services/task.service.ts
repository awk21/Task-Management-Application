import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) { 
  }
  AddTask(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/taskSetails',data)
  }
  editTask(id:number,data:any):Observable<any>{
    return this._http.put(`http://localhost:3000/taskSetails/${id}`,data)
  }
  getTaskDetails():Observable<any>{
    return this._http.get('http://localhost:3000/taskSetails')
  }
  deleteTaskDetails(id: number):Observable<any>{
    return this._http.delete(`http://localhost:3000/taskSetails/${id}`)
  }
  getCurrentTaskDetails(id: number):Observable<any>{
    return this._http.get(`http://localhost:3000/taskSetails/${id}`)
  }

}
