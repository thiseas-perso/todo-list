import { showDetails } from './showdetails.js'
import { editTodo } from './edittodo.js'
import { createTodo } from './createnewtodo.js'
import { toggleComplete } from './togglecomplete.js'
import { togglePrioDisplay } from './togglepriodisplay.js'




function showTodos(project) {

   const body = document.querySelector('body')
   const main = document.createElement('main')
   body.appendChild(main)

   if (project) {
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

         const editBtn = document.createElement('span')
         editBtn.innerText = 'edit'
         editBtn.classList.add('material-icons-outlined', 'editBtn')
         editBtn.addEventListener('click', function (e) {
            editTodo(element, project)
         })

         const todoDate = document.createElement('div')
         todoDate.innerText = element.dueDate

         const markCompleteBtn = document.createElement('span')
         markCompleteBtn.classList.add('material-icons-outlined', 'toggleBtn')
         if (!element.complete) {
            markCompleteBtn.innerText = 'radio_button_unchecked'
            todoContainer.classList.remove('todo-completed')
         } else {
            markCompleteBtn.innerText = 'radio_button_checked'
            todoContainer.classList.add('todo-completed')
         }
         markCompleteBtn.addEventListener('click', function (e) {
            toggleComplete(e, element, todoContainer)
         })

         const prioDisplay = document.createElement('span')
         prioDisplay.classList.add('material-icons-outlined', 'priodisplay')
         prioDisplay.innerText = 'warning'
         togglePrioDisplay(prioDisplay, element)

         const newTodoBtnContainer = document.createElement('div')
         newTodoBtnContainer.setAttribute('class', 'btn-container')

         newTodoBtnContainer.appendChild(markCompleteBtn)
         newTodoBtnContainer.appendChild(editBtn)
         newTodoBtnContainer.appendChild(deleteBtn)
         newTodoBtnContainer.appendChild(prioDisplay)
         todoContainer.appendChild(todoTitle)
         todoContainer.appendChild(detailsBtn)
         todoContainer.appendChild(todoDate)
         todoContainer.appendChild(newTodoBtnContainer)


         main.appendChild(todoContainer)
      })

      const newTodoBtnContainer = document.createElement('div')
      newTodoBtnContainer.setAttribute('id', 'newTodoBtnContainer')
      const createNewTodoBtn = document.createElement('span')
      newTodoBtnContainer.appendChild(createNewTodoBtn)


      createNewTodoBtn.setAttribute('id', 'newTodoBtn')
      createNewTodoBtn.innerText = 'New task'
      main.appendChild(newTodoBtnContainer)
      createNewTodoBtn.addEventListener('click', function (e) {
         createTodo(project)
      })


   }

}

export { showTodos }

