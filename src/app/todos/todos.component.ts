import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  inputTodo: string = "";
  limit = 5;
  test = 0;

  todos: string[] = [];
  todosFinished: string[] = [];
  showTodos: string[] = [];
  currentRoute: string = "";

  constructor(private router: Router) {
    this.load();
    this.save();
  }

  getRouteNum(): number {
    return this.currentRoute == "/todos" ? 0 : 1;
  }

  ngOnInit() {
    this.getShowTodos();
  }

  load() {
    // Loads todos
    this.todos = JSON.parse(localStorage.getItem('todos') || '[]');
    this.todosFinished = JSON.parse(localStorage.getItem('todosFinished') || '[]');
  }

  save() {
    // Saves todos
    localStorage.setItem('todos', JSON.stringify(this.todos));
    localStorage.setItem('todosFinished', JSON.stringify(this.todosFinished));
  }

  getShowTodos() {
    this.save();
    this.load();
    this.currentRoute = this.router.url.toString();
    if (this.currentRoute == "/todos") {
      this.showTodos = this.todos;
    }
    else if (this.currentRoute == "/completed") {
      this.showTodos = this.todosFinished;
    }
  }

  toggleDone(id: number, arrayNum: number) {
    const currentArray = arrayNum == 0 ? this.todos : this.todosFinished;
    const otherArray = arrayNum == 1 ? this.todos : this.todosFinished;
    console.log(currentArray);
    console.log(otherArray);
    // Moves todo from current array to other array
    for (let i = 0; i < currentArray.length; i++) {
      if (i == id) {
        otherArray.push(currentArray[i]);
        currentArray.splice(i, 1);
      }
    }
    this.getShowTodos();
  }

  deleteTodo(id: number, arrayNum: number) {
    if (arrayNum == 0)
      this.todos = this.todos.filter((v, i) => i != id);
    else
      this.todosFinished = this.todosFinished.filter((v, i) => i != id);
    this.getShowTodos();
  }

  addTodo() {
    if (this.validateTodo()) {
      this.todos.push(this.inputTodo);
      this.inputTodo = "";
      this.getShowTodos();
    }
  }

  validateTodo() {
    let temp = 0;

    if (this.inputTodo == "" || this.inputTodo.length > 100)
      return false;
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i] == this.inputTodo)
        temp = 1;
    }
    if (temp == 1) {
      alert("Todo already exists.");
      this.inputTodo = "";
    }
    return temp == 0;
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(event.container.data,
      event.previousIndex,
      event.currentIndex);
  }

  
}
