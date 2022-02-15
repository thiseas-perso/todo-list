function cleanTodos() {
   const body = document.querySelector('body')
   const main = document.querySelector('main')
   if (main) {
      body.removeChild(main)
   }
}

export { cleanTodos }