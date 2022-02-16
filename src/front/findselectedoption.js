function findSelectedPrio(todo, none, low, normal, high) {
   let prios = [none.innerText, low.innerText, normal.innerText, high.innerText]
   let selects = [none, low, normal, high]
   for (let i = 0; i < prios.length; i++) {
      if (todo.priority == prios[i]) {
         selects[i].setAttribute('selected', 'true')
      }
   }
}

export { findSelectedPrio }