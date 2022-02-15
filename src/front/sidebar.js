function createSidebar(list) {
   const body = document.querySelector('body')

   const sidebar = document.createElement('aside')
   const sidebarTitle = document.createElement('h2')
   sidebarTitle.innerText = 'Projects'
   sidebar.appendChild(sidebarTitle)


   for (let i = 0; i < list.projects.length; i++) {
      let sidebarItem = document.createElement('div')
      sidebarItem.classList.add('sidebar-item')
      let itemTitle = document.createElement('h3')
      itemTitle.innerText = list.projects[i].title
      sidebarItem.appendChild(itemTitle)
      sidebar.appendChild(sidebarItem)
   }


   body.appendChild(sidebar)

}

export { createSidebar }