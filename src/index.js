import { TodoList, Project, Todo } from "./generator"


const myList = new TodoList('MYlistTEST')
myList.createNewProject('NewProtz', true)
myList.projects[0].createNewTodo("TODOsoooon", "Feb 22")
myList.projects[0].createNewTodo("TODO later", "March 09")
console.log(myList.projects[0].todos)