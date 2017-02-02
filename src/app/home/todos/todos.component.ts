import { Component, OnInit } from '@angular/core';
import { TodoService, Todo, TodoGroup } from 'app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.less']
})
export class TodosComponent implements OnInit {

  todoGroups: TodoGroup[] = [];
  saved: boolean = false;

  constructor(private todoService: TodoService) {
    this.todoGroups = this.todoService.getTodos();
  }

  ngOnInit() {
  }

  getTime(timestamp: number) {
    const date = new Date(timestamp);

    return `${date.getHours()}:${date.getMinutes()}`;
  }

  getDate(timestamp: number) {
    const date = new Date(timestamp);

    return `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
  }

  addGroup() {
    this.todoGroups.push(new TodoGroup());
  }

  addTodo(group: TodoGroup) {
    group.addTodo(new Todo());
  }

  removeGroup(group: TodoGroup){
    this.todoGroups.splice(this.todoGroups.indexOf(group), 1);
  }

  empty(text: string){
    if(text.trim().length > 0){
      return false;
    }
    return true;
  }

  save(){
    console.log(this.todoGroups);
  }

}
