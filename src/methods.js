import { TodoList, Project, Todo } from './generator.js'


TodoList.prototype.createNewProject = function (title, isDefault) {
   const newProject = new Project(title, isDefault);
   newProject.containerArray = this.projects;
   this.projects.push(newProject)
}

Project.prototype.deleteProject = function () {
   for (let i = 0; i < this.containerArray.length; i++) {
      if (this == this.containerArray[i]) {
         this.containerArray.splice(i, 1)
      }
   }
   if (this.containerArray.length == 1) {
      this.containerArray[0].isDefault = true
   }
}


Project.prototype.createNewTodo = function (setTitle, setDate) {
   const newTodo = new Todo(setTitle, setDate)
   newTodo.containerArray = this.todos;
   this.todos.push(newTodo)
}

Todo.prototype.deleteTodo = function () {
   for (let i = 0; i < this.containerArray.length; i++) {
      if (this == this.containerArray[i]) {
         this.containerArray.splice(i, 1)
      }
   }
}