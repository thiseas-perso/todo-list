import { TodoList, Project, Todo } from './generator.js'


TodoList.prototype.createNewProject = function (title, isDefault) {
   const newProject = new Project(title, isDefault);
   newProject.containerArray = this.projects;
   this.projects.push(newProject)
   return newProject
}


Project.prototype.createNewTodo = function (setTitle, setDate) {
   const newTodo = new Todo(setTitle, setDate)
   newTodo.containerArray = this.todos;
   this.todos.push(newTodo)
   return newTodo
}


Project.prototype.deleteProject = function () {
   for (let i = 0; i < this.containerArray.length; i++) {
      if (this == this.containerArray[i]) {
         this.containerArray.splice(i, 1)
         break;
      }
   }
   if (this.containerArray.length == 1) {
      this.containerArray[0].isDefault = true
   }
}


Todo.prototype.deleteTodo = function () {
   for (let i = 0; i < this.containerArray.length; i++) {
      if (this == this.containerArray[i]) {
         return this.containerArray.splice(i, 1)
      }
   }
}


Todo.prototype.moveTodo = function (destination) {
   let moved = this.deleteTodo();
   moved[0].containerArray = destination.todos;
   destination.todos.push(moved[0]);
   return moved
}

export { TodoList, Project, Todo }
