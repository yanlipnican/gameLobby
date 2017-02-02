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
  public timestamp: number = new Date().getTime();
  public todos: Todo[] = [];

  /**
   * Creates TodoGroup instance from ITodoGroup data object
   */
  public static create(data: ITodoGroup): TodoGroup {
    const newGroup = new TodoGroup();
    newGroup.id = data.id;
    newGroup.title = data.title;
    newGroup.timestamp = data.timestamp;
    newGroup.addTodoData(data.todos);
    return newGroup;
  }

  constructor(public title = '') {}

  public addTodoData(data: ITodo[]): void {
    for(let todo of data){
      this.todos.push(Todo.create(todo));
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
  public timestamp: number = new Date().getTime();
  public done: boolean = false;

  /**
   * Creates Todo instance from ITodo data object
   */
  public static create(data: ITodo): Todo {
    const newTodo = new Todo();
    newTodo.id = data.id;
    newTodo.title = data.title;
    newTodo.text = data.text;
    newTodo.timestamp = data.timestamp;
    newTodo.done = data.done;

    return newTodo;
  }

  constructor(public title = '', public text = '') {}

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

  getTodos(): TodoGroup[] {
    return [];
  }

}