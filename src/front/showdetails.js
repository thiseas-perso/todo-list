function showDetails(element) {
   const body = document.querySelector('body')
   const background = document.createElement('div')
   background.classList.add('overlay-div')


   const container = document.createElement('div')
   container.classList.add('details-container')

   const title = document.createElement('h4')
   title.innerText = element.title

   const close = document.createElement('button')
   close.innerText = "close"
   close.setAttribute('class', 'close-btn')

   close.addEventListener('click', function (e) {
      body.removeChild(background)
   })

   const details = document.createElement('p')
   details.innerText = `Project: ${element.parentProject} \n Priority: ${element.priority} \n Due Date: ${element.dueDate}`

   container.appendChild(title)
   container.appendChild(details)
   container.appendChild(close)
   body.appendChild(background)
   background.appendChild(container)
   console.log(element)
}


export { showDetails }