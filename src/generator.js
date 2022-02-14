import { todoListMethods, projectMethods, todoMethods } from './methods.js'



function createTodoList(setTitle) {
   const methods = todoListMethods();
   const title = setTitle;
   const projects = [];
   return Object.assign({}, methods, { title, projects })
}

function createProject(setTitle = 'New Project', setDefault = false) {
   const methods = projectMethods();
   const todos = [];
   const isDefault = setDefault;
   const title = setTitle;
   return Object.assign({}, methods, { todos, isDefault, title })
}

function createTodo(setTitle = "Unnamed to-do", date = undefined) {
   const title = setTitle;
   const description = null;
   const dueDate = date;
   const priority = 0;
   const complete = false;

   return { title, description, dueDate, priority, complete }
}

export { createProject, createTodo, createTodoList }