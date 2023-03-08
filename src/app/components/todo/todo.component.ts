import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo!: Todo;
  @Input() delete = new EventEmitter<string>();

  constructor(){

  }

  ngOnInit(): void {
    
  }

  deleteTodo(){
    this.delete.emit(this.todo.id)
  }

}
