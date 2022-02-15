function createMainContent(project) {
   const body = document.querySelector('body')
   const main = document.createElement('main')
   body.appendChild(main)

   if (project)
      project.todos.forEach(element => {
         const todoContainer = document.createElement('div')
         todoContainer.classList.add('todo-container')
         const todoTitle = document.createElement('h4')
         todoTitle.innerText = element.title
         const todoDate = document.createElement('div')
         todoDate.innerText = element.dueDate
         todoContainer.appendChild(todoTitle)
         todoContainer.appendChild(todoDate)
         main.appendChild(todoContainer)
      });

}

export { createMainContent }