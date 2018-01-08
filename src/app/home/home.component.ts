import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number = 4;
  btnText: string = 'Add an Item';
  todoText: string= 'My first thing to do';
  todos = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.todos.length;
  }

  addItem() {
    this.todos.push(this.todoText);
    this.todoText = '';
    this.itemCount = this.todos.length;
  }

}
