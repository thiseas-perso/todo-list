import './normalize.css'
import './style.css';

import { showTodos } from './front/showtodos.js'
import { mainList } from './back/seed.js'
import { createSidebar } from './front/sidebar.js'
import { seedSidebar } from './front/seedsidebar.js'
import { createHeader } from './front/header.js'

createHeader()
createSidebar()
seedSidebar(mainList)
showTodos(mainList.projects[0])
const sidebarItem = document.querySelector('.sidebar-item')
sidebarItem.classList.add('activated')


