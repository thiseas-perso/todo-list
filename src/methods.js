import { TodoList, Project, Todo } from './generator.js'


TodoList.prototype.createNewProject = function (title, isDefault) {
   const newProject = new Project(title, isDefault);
   this.projects.push(newProject)
}


Project.prototype.createNewTodo = function (setTitle, setDate) {
   const newTodo = new Todo(setTitle, setDate)
   this.todos.push(newTodo)
}