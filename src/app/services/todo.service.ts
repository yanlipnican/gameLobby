import { Injectable } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

export interface ITodo{
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