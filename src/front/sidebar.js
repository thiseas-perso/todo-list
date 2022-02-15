import { showTodos } from './showtodos.js'
import { cleanTodos } from './cleantodos.js'

function createSidebar(list) {
   const body = document.querySelector('body')
   const sidebar = document.createElement('aside')
   const sidebarTitle = document.createElement('h2')
   sidebarTitle.innerText = 'Projects'
   sidebar.appendChild(sidebarTitle)

   for (let i = 0; i < list.projects.length; i++) {
      let sidebarItem = document.createElement('div')
      sidebarItem.classList.add('sidebar-item')
      let itemTitle = document.createElement('p')
      itemTitle.innerText = list.projects[i].title
      sidebarItem.appendChild(itemTitle)
      sidebar.appendChild(sidebarItem)
      sidebarItem.addEventListener('click', function (e) {
         cleanTodos()
         showTodos(list.projects[i])
      })
   }

   body.appendChild(sidebar)

}


export { createSidebar }