function togglePrioDisplay(container, todo) {
   switch (todo.priority) {
      case 'Low':
         container.classList.add('lowprio')
         break;
      case 'Normal':
         container.classList.add('normalprio')
         break;
      case 'High':
         container.classList.add('highprio')
         break;
      case '':
         container.classList.add('noprio')
         break;
   }
}

export { togglePrioDisplay }