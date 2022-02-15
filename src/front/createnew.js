function createNew() {
   const body = document.querySelector('body')
   const background = document.createElement('div')
   background.classList.add('overlay-div')


   const container = document.createElement('div')
   container.classList.add('details-container')

   const title = document.createElement('h4')
   title.innerText = 'create new'

   const close = document.createElement('button')
   close.innerText = "close"
   close.setAttribute('class', 'close-btn')
   close.addEventListener('click', function (e) {
      body.removeChild(background)
   })



   container.appendChild(title)
   container.appendChild(close)
   body.appendChild(background)
   background.appendChild(container)

}


export { createNew }