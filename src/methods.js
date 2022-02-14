import { createProject, createTodo, createTodoList } from './generator.js'


function todoListMethods() {
   const createNewProject = function (title, isDefault) {
      const newProject = createProject(title, isDefault);
      this.projects.push(newProject)
      console.log(this.projects)
   }
   return { createNewProject }
}


function projectMethods() {
   const createNewTodo = function (setTitle, setDate) {
      const newTodo = createTodo(setTitle, setDate)
      this.todos.push(newTodo)
      console.log(this.todos)
   }
   return { createNewTodo }
}

function todoMethods() {

}


export { todoListMethods, projectMethods, todoMethods }