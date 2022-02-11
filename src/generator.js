function createProject(name = 'New Project', setDefault = false) {
   const todos = [];
   const isDefault = setDefault;
   const title = name;

   return { todos, isDefault, title }
}