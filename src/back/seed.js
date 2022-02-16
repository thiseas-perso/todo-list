import { TodoList } from "./methods.js"


function seed() {
   const list = new TodoList('My Todo List')
   const project1 = list.createNewProject('Example Project 1', true)
   project1.createNewTodo('Feed the cats', 'december')
   project1.createNewTodo('Feed the birds', 'october')
   const project2 = list.createNewProject('Example Project 2', false)
   project2.createNewTodo('Feed the dogs', 'september')
   const project3 = list.createNewProject('Example Project 3', false)
   return list
}

const mainList = seed()

export { mainList }