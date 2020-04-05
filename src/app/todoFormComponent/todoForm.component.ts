import { Component, NgModule, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todoForm.component.html'
})
export class TodoFormComponent {
  todoForm = 'app-todo-form';
  addItem: string= "";

  @Output() sendRequest = new EventEmitter<string>();


  addNewItem(input,hello) {
    if(hello !== null){
     this.sendRequest.emit(hello);
     input.value="";
    }
  }
}
