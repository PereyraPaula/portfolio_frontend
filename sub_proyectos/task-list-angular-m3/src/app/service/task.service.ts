import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,of } from 'rxjs'
import {Task} from '../Task'
import {TASKS} from '../mock_task'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    // const tasks = of(TASKS);
    // return tasks
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTasks(tasks: Task): Observable<Task> {
    const url = `${this.apiUrl}/${tasks.id}`;
    return this.http.delete<Task>(url)
  } 

  updateTaskReminder(tasks: Task): Observable<Task> {
    const url = `${this.apiUrl}/${tasks.id}`;
    return this.http.put<Task>(url, tasks, httpOptions)
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions)
  } 
}
