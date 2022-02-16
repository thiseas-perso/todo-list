function toggleComplete(event, todo, container) {
   if (todo.complete) {
      todo.complete = false
      event.originalTarget.innerText = 'radio_button_unchecked'
      container.classList.remove('todo-completed')
   }
   else {
      todo.complete = true
      event.originalTarget.innerText = 'radio_button_checked'
      container.classList.add('todo-completed')
   }

}

export { toggleComplete }