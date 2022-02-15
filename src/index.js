import './normalize.css'
import './style.css';

import { mainList } from './back/seed.js'
import { createSidebar } from './front/sidebar.js'
import { showTodos } from './front/showtodos.js'
import { createHeader } from './front/header.js'

createHeader()
createSidebar(mainList)
// showTodos(mainList.projects[0])