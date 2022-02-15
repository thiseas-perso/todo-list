import './style.css';

import { mainList } from './back/seed.js'
import { createSidebar } from './front/sidebar.js'
import { createMainContent } from './front/main.js'


createSidebar(mainList)
createMainContent(mainList.projects[0])