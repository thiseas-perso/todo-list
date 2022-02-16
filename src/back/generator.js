

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

function Todo(title = "Unnamed to-do", date = '', description = '', priority = '') {
   this.title = title;
   this.description = description;
   this.dueDate = date;
   this.priority = priority;
   this.complete = false;
   this.containerArray;
   this.parentProject;
}

export { TodoList, Project, Todo }