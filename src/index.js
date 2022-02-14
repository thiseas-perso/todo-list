import { createProject, createTodo, createTodoList } from "./generator"


const myList = createTodoList('MYlistTEST')
myList.createNewProject('NewProtz', true)
myList.projects[0].createNewTodo("TODOsoooon", "Feb 22")
console.log(myList.projects[0].todos[0])