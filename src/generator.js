function createTodoList(setTitle) {
   const title = setTitle;
   const projects = [];
   const createNewProject = function (title, isDefault) {
      const newProject = createProject(title, isDefault);
      projects.push(newProject)
   }
   return { title, projects, createNewProject }
}

function createProject(setTitle = 'New Project', setDefault = false) {
   const todos = [];
   const isDefault = setDefault;
   const title = setTitle;
   const createNewTodo = function (setTitle, setDate) {
      const newTodo = createTodo(setTitle, setDate)
      todos.push(newTodo)
   }
   return { todos, isDefault, title, createNewTodo }
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