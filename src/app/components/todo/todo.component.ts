import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Todo } from 'src/app/models/todo.model';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  @Input() todo!: Todo;
  @Output() delete = new EventEmitter<string>();
  @Output() update = new EventEmitter<Todo>();

  constructor() {  }

  ngOnInit(): void {
      
  }

  deleteTodo(){
    this.delete.emit(this.todo.id);
  }

  updateTodo(){
    this.update.emit(this.todo);
  }

}
