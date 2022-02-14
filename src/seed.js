import { TodoList } from "./methods.js"


function seed() {
   const list = new TodoList('My Calendar')
   const project1 = list.createNewProject('Example Project 1', true)
   project1.createNewTodo('Feed the cats', 'december')
   const project2 = list.createNewProject('Example Project 2', false)
   const project3 = list.createNewProject('Example Project 3', false)

   return list
}

const mainList = seed()

export { mainList }