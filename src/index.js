import { TodoList, Project, Todo } from "./generator"


const myList = new TodoList('MYlistTEST')
myList.createNewProject('Audy project', true)
myList.createNewProject('Titi project', false)
myList.projects[0].createNewTodo("TODO Audy", "Feb 22")
myList.projects[0].createNewTodo("TODO Thiseas", "March 09")
myList.projects[0].todos[1].moveTodo(myList.projects[1])
console.log(myList.projects)