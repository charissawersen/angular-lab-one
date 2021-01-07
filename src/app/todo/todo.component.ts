import { Component, OnInit } from '@angular/core';
interface Todo {
  task: string,
  completed: boolean,
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todos: Todo[];

  constructor() {
    this.todos = [
      {
        task: 'fold clothes',
        completed: false,
      },
      {
        task: 'put clothes in drawer',
        completed: false,
      },
      {
        task: 'relax',
        completed: false,
      },
      {
        task: 'try to pet cat',
        completed: true,
      },
      {
        task: 'pet dog',
        completed: true,
      },
      {
        task: 'be awesome',
        completed: false,
      }
    ]
  }

  ngOnInit(): void {
  }

}
