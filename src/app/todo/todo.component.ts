import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  filter: string = '';
  todos: Todo[];
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
      },
    ];
  }
  ngOninit(): void {}

  newTask: TodoComponent;
  addTask(newTask: string): void {
    this.todos.push({ task: newTask, completed: false });
  }

  removeTask(i: any): void {
    this.todos.splice(i, 1);
    if (this.todos.length === 0) {
      alert('Yay! Your tasks are done!');
    }
  }

  completeTask(i: any): void {
    this.todos[i].completed = true;
  }

  getFilteredResults(): Todo[] {
    return this.todos.filter((todo) => {
      return todo.task.toLowerCase().includes(this.filter.toLowerCase());
    });
  }

  ngOnInit() {}
}
