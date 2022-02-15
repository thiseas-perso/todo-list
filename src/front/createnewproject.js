import { mainList } from '../back/seed.js'
import { seedSidebar } from './seedsidebar.js'

function createNewProject() {
   const body = document.querySelector('body')
   const background = document.createElement('div')
   background.classList.add('overlay-div')


   const container = document.createElement('div')
   container.classList.add('newitem-container')

   const title = document.createElement('h4')
   title.innerText = 'Create a new project'

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
   const submitBtn = document.createElement('button')
   submitBtn.innerText = 'Confirm'
   submitBtn.setAttribute('type', 'submit')

   form.addEventListener('submit', function (e) {
      e.preventDefault()
      mainList.createNewProject(titleInput.value)
      seedSidebar(mainList)
      console.log(mainList)
      body.removeChild(background)
   })

   container.appendChild(title)
   form.appendChild(titleInput)
   form.appendChild(close)
   form.appendChild(submitBtn)
   container.appendChild(form)
   body.appendChild(background)
   background.appendChild(container)

}


export { createNewProject }