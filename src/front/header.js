function createHeader() {
   const body = document.querySelector('body')
   const header = document.createElement('header')
   const title = document.createElement('h1')
   title.innerText = 'My Todo List'
   header.appendChild(title)
   body.appendChild(header)
}

export { createHeader }