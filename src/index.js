import './style.css';

import { mainList } from './seed.js'
import { createSidebar } from './sidebar.js'
import { createMainContent } from './main.js'

createSidebar(mainList)
createMainContent(mainList.projects[0])