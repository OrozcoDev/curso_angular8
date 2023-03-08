import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {

   }

   getAllTodos(){
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
   }
}
