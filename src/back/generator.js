

function TodoList(setTitle) {
   this.title = setTitle;
   this.projects = [];
}

function Project(setTitle = 'New Project', setDefault = false) {
   this.todos = [];
   this.isDefault = setDefault;
   this.title = setTitle;
   this.containerArray;
   this.description;
}

function Todo(setTitle = "Unnamed to-do", date = undefined) {
   this.title = setTitle;
   this.description;
   this.dueDate = date;
   this.priority = 0;
   this.complete = false;
   this.containerArray;
   this.parentProject;
}

export { TodoList, Project, Todo }