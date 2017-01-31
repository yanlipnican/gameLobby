import { Injectable } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { UUID } from 'app/app.helpers';

export interface ITodo {
  id: string;
  title: string;
  text: string;
  timestamp: number;
  done: boolean;
}

export interface ITodoGroup{
  id: string;
  todos: ITodo[];
  title: string;
  timestamp: number;
}

export class TodoGroup implements ITodoGroup{

  public id: string = UUID.generate();
  public title: string = '';
  public timestamp: number = new Date().getTime();
  public todos: Todo[] = [];

  constructor(data?: ITodoGroup){
    if(data){
      this.id = data.id;
      this.title = data.title;
      this.timestamp = data.timestamp;
      this.todos = [];
      this.addTodoData(data.todos);
    }
  }

  public addTodoData(data: ITodo[]): void {
    for(let todo of data){
      this.todos.push(new Todo(todo));
    }
  }

  public addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  public toJSON(): ITodoGroup {

    let todos = [];

    for(let todo of this.todos){
      todos.push(todo.toJSON());
    }

    return {
      id: this.id,
      title: this.title,
      timestamp: this.timestamp,
      todos: todos,
    }
  }

}

export class Todo implements ITodo{

  public id: string = UUID.generate();
  public title: string = '';
  public text: string = '';
  public timestamp: number = new Date().getTime();
  public done: boolean = false;

  constructor(data?: ITodo){
    if(data){
      this.id = data.id;
      this.title = data.title;
      this.text = data.text;
      this.timestamp = data.timestamp;
      this.done = data.done;
    }
  }

  public toJSON(): ITodo {
    return {
      id: this.id,
      title: this.title,
      text: this.text,
      timestamp: this.timestamp,
      done: this.done,
    };
  }

}

@Injectable()
export class TodoService{

  constructor(private auth: AuthService) {}

  getTodos(): ITodoGroup[] {
    return [
      {
        id: 'asda',
        todos: [
          {id: 'asgnk', title: 'Groceries', text: 'just some shit', timestamp: 1485809300, done: false},
          {id: 'asgnkasf', title: 'Do nothing', text: 'just some shit', timestamp: 1485809300, done: true},
        ],
        title: 'First todo group',
        timestamp: 1485809200
      },

      {id: 'asdas', todos: [], title: 'Second todo group', timestamp: 1485809200},

      {id: 'asdad', todos: [], title: 'Third todo group', timestamp: 1485809200},
    ];
  }

}