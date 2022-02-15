import { showTodos } from './showtodos.js'
import { cleanTodos } from './cleantodos.js'
import { toggleActive } from './toggleactive.js'

function createSidebar(list) {
   const body = document.querySelector('body')
   const sidebar = document.createElement('aside')
   const sidebarTitle = document.createElement('h2')
   sidebarTitle.innerText = 'Projects'
   sidebar.appendChild(sidebarTitle)

   for (let i = 0; i < list.projects.length; i++) {
      let sidebarItem = document.createElement('div')
      sidebarItem.classList.add('sidebar-item')
      sidebarItem.innerText = list.projects[i].title
      sidebar.appendChild(sidebarItem)
      sidebarItem.addEventListener('click', function (e) {
         cleanTodos()
         showTodos(list.projects[i])
         toggleActive(e)
      })
   }

   body.appendChild(sidebar)

}


export { createSidebar }