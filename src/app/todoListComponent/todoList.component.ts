import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todoList.component.html',
})
export class TodoListComponent {
  heading = 'todo List';
  sendItem:any;
  todos: Array<string>;

  constructor() {
    this.todos = [];
  }

  onItemCreated(hello:any){
    this.sendItem = this.todos.unshift(hello);
  }

  deleteList(language) {
    const index = this.todos.indexOf(language);
    if( index >= 0) this.todos.splice(index, 1);
  }

}
