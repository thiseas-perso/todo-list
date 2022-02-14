import { TodoList, Project, Todo } from "./methods.js"


const myList = new TodoList('My Calendar')
myList.createNewProject('Example Project', true)


function populateDom() {

   const body = document.querySelector('body')


   const sidebar = document.createElement('aside')
   const sidebarTitle = document.createElement('h2')
   sidebarTitle.innerText = 'Projects'
   sidebar.appendChild(sidebarTitle)


   for (let i = 0; i < myList.projects.length; i++) {
      let sidebarItem = document.createElement('div')
      sidebarItem.setAttribute('class', 'sidebar-item')
      let itemTitle = document.createElement('h3')
      itemTitle.innerText = myList.projects[i].title
      sidebarItem.appendChild(itemTitle)
      sidebar.appendChild(sidebarItem)
   }


   body.appendChild(sidebar)

}

export { populateDom }