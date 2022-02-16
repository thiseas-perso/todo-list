import { showTodos } from './showtodos.js'
import { cleanTodos } from './cleantodos.js'

function createTodo(project) {
   const body = document.querySelector('body')
   const background = document.createElement('div')
   background.classList.add('overlay-div')


   const container = document.createElement('div')
   container.classList.add('newtodo-container')

   const title = document.createElement('h4')
   title.innerText = 'Create a new Todo'

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
   titleInput.setAttribute('placeholder', 'Choose a title')

   const dateInput = document.createElement('input')
   dateInput.setAttribute('type', 'date')


   const descrInput = document.createElement('textarea')
   descrInput.setAttribute('placeholder', 'Details about your task')
   descrInput.setAttribute('id', 'todo-textarea')
   descrInput.setAttribute('maxlength', '500')

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


   prioInput.appendChild(selectEmpty)
   prioInput.appendChild(selectLow)
   prioInput.appendChild(selectNormal)
   prioInput.appendChild(selectHigh)

   const submitBtn = document.createElement('button')
   submitBtn.innerText = 'Confirm'
   submitBtn.setAttribute('type', 'submit')

   form.addEventListener('submit', function (e) {
      e.preventDefault()
      console.log(prioInput.value)
      project.createNewTodo(titleInput.value, dateInput.value, descrInput.value, prioInput.value)
      cleanTodos()
      showTodos(project)
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


export { createTodo }