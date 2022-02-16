import { showTodos } from './showtodos.js'
import { cleanTodos } from './cleantodos.js'
import { findSelectedPrio } from './findselectedoption.js'

function editTodo(todo, proj) {
   const body = document.querySelector('body')
   const background = document.createElement('div')
   background.classList.add('overlay-div')


   const container = document.createElement('div')
   container.classList.add('newitem-container')

   const title = document.createElement('h4')
   title.innerText = `Edit '${todo.title}'`

   const close = document.createElement('button')
   close.innerText = "Cancel"
   close.setAttribute('class', 'close-btn')
   close.addEventListener('click', function (e) {
      body.removeChild(background)

   })



   const form = document.createElement('form')

   const titleInput = document.createElement('input')
   titleInput.setAttribute('type', 'text')
   titleInput.setAttribute('required', 'true')
   titleInput.value = todo.title

   const dateInput = document.createElement('input')
   dateInput.setAttribute('type', 'date')


   const descrInput = document.createElement('textarea')
   descrInput.setAttribute('placeholder', 'Details about your task')
   descrInput.setAttribute('id', 'todo-textarea')
   descrInput.setAttribute('maxlength', '500')
   descrInput.value = todo.description

   const prioInput = document.createElement('select')
   prioInput.setAttribute('name', 'priority')
   prioInput.setAttribute('id', 'priority')


   const selectEmpty = document.createElement('option')
   selectEmpty.setAttribute('value', '')

   selectEmpty.innerText = '-- priority --'

   const selectLow = document.createElement('option')
   selectLow.setAttribute('value', 'Low')
   selectLow.innerText = 'Low'

   const selectNormal = document.createElement('option')
   selectNormal.setAttribute('value', 'Normal')
   selectNormal.innerText = 'Normal'

   const selectHigh = document.createElement('option')
   selectHigh.setAttribute('value', 'High')
   selectHigh.innerText = 'High'


   findSelectedPrio(todo, selectEmpty, selectLow, selectNormal, selectHigh)

   prioInput.appendChild(selectEmpty)
   prioInput.appendChild(selectLow)
   prioInput.appendChild(selectNormal)
   prioInput.appendChild(selectHigh)

   const submitBtn = document.createElement('button')
   submitBtn.innerText = 'Confirm'
   submitBtn.setAttribute('type', 'submit')

   form.addEventListener('submit', function (e) {
      e.preventDefault()
      todo.title = titleInput.value;
      todo.description = descrInput.value;
      if (dateInput.value)
         todo.dueDate = dateInput.value;
      todo.priority = prioInput.value;
      cleanTodos()
      showTodos(proj)
      body.removeChild(background)
   })

   container.appendChild(title)
   form.appendChild(titleInput)
   form.appendChild(dateInput)
   form.appendChild(descrInput)
   form.appendChild(prioInput)
   form.appendChild(close)
   form.appendChild(submitBtn)
   container.appendChild(form)
   body.appendChild(background)
   background.appendChild(container)

}


export { editTodo }