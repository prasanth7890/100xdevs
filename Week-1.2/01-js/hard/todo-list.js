/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor() {
      this.todoList = [];
    }

    add(todo) {
      this.todoList.push(todo);
    }

    remove(indexOfTodo) {
      this.todoList = this.todoList.filter(item => this.todoList.indexOf(item) != indexOfTodo);
    }

    update(index, updatedTodo) {
      for(let i=0;i<this.todoList.length;i++) {
        if(i === index) {
          this.todoList[index] = updatedTodo;
          break;
        }
      }
    }

    getAll() {
      return this.todoList;
    }

    get(indexOfTodo) {
      if(indexOfTodo >= this.todoList.length) {
        return null;
      }

      for(let i=0;i<this.todoList.length;i++)
      {
        if(indexOfTodo === i) {
          return this.todoList[i];
        }
      }
    }


    clear() {
      this.todoList = [];
    }

}

module.exports = Todo;
