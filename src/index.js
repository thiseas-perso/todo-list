import { TodoList, Project, Todo } from "./generator"


const myList = new TodoList('MYlistTEST')
myList.createNewProject('NewProtz', true)
myList.createNewProject('Another', false)
myList.projects[0].createNewTodo("TODOsoooon", "Feb 22")
myList.projects[0].createNewTodo("TODO later", "March 09")
myList.projects[0].deleteProject()
console.log(myList.projects[0])