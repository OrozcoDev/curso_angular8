import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{

  todos: Todo[]=[];
  title!:string;

  constructor(private todoService: TodoService){
  }

  ngOnInit(){
    this.todoService.getAllTodos()
    .subscribe(todos =>
      this.todos=todos
    )};

    addTodo(){
      //code
    }

    updateTodo(){
      //code
    }

    onDeleteTodo(todoId:string){
      this.todoService.de
      console.log(todoId);
    }

}
