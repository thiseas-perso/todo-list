import { showTodos } from './showtodos.js'
import { cleanTodos } from './cleantodos.js'
import { toggleActive } from './toggleactive.js'
import { createNew } from './createnewproject.js'



function seedSidebar(list) {
   const sidebar = document.querySelector('aside')
   sidebar.innerHTML = '';
   const sidebarTop = document.createElement('div')
   const sidebarBottom = document.createElement('div')
   const sidebarTitle = document.createElement('h2')
   sidebarTitle.innerText = 'Projects'
   sidebarTop.appendChild(sidebarTitle)

   for (let i = 0; i < list.projects.length; i++) {
      let sidebarItem = document.createElement('div')
      sidebarItem.classList.add('sidebar-item')
      sidebarItem.innerText = list.projects[i].title
      sidebarTop.appendChild(sidebarItem)
      sidebarItem.addEventListener('click', function (e) {
         cleanTodos()
         showTodos(list.projects[i])
         toggleActive(e)
      })
   }

   const newItemBtn = document.createElement('span')
   newItemBtn.classList.add('material-icons-outlined')
   newItemBtn.setAttribute('id', 'newBtn')
   newItemBtn.innerText = 'add'
   newItemBtn.addEventListener('click', function (e) {
      createNew()
   })

   sidebar.appendChild(sidebarTop)
   sidebarBottom.appendChild(newItemBtn)
   sidebar.appendChild(sidebarBottom)
}

export { seedSidebar }