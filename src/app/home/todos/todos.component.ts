import { Component, OnInit } from '@angular/core';
import { TodoService, ITodo, ITodoGroup } from 'app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.less']
})
export class TodosComponent implements OnInit {

  todoGroups: ITodoGroup[] = [];

  constructor(private todoService: TodoService) {
    this.todoGroups = this.todoService.getTodos();
  }

  ngOnInit() {
  }

  getTime(timestamp) {
    const date = new Date(timestamp);

    return `${date.getHours()}:${date.getMinutes()}`;
  }

  getDate(timestamp) {
    const date = new Date(timestamp);

    return `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
  }

}
