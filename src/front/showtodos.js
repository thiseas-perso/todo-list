import { showDetails } from './showdetails.js'

function showTodos(project) {

   const body = document.querySelector('body')
   const main = document.createElement('main')
   body.appendChild(main)

   if (project)
      project.todos.forEach(element => {
         const todoContainer = document.createElement('div')
         todoContainer.classList.add('todo-container')
         const todoTitle = document.createElement('p')
         todoTitle.innerText = element.title

         const detailsBtn = document.createElement('button')
         detailsBtn.innerText = 'DETAILS'
         detailsBtn.addEventListener('click', function (event) {
            showDetails(element)
         })

         const deleteBtn = document.createElement('span')
         deleteBtn.innerText = 'delete_forever'
         deleteBtn.classList.add('material-icons-outlined', 'deleteBtn')
         deleteBtn.addEventListener('click', function (e) {
            element.deleteTodo()
            main.removeChild(todoContainer)
         })

         const todoDate = document.createElement('div')
         todoDate.innerText = element.dueDate

         todoContainer.appendChild(todoTitle)
         todoContainer.appendChild(detailsBtn)
         todoContainer.appendChild(todoDate)
         todoContainer.appendChild(deleteBtn)
         main.appendChild(todoContainer)
      });

}

export { showTodos }

