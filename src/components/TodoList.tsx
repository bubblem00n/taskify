import React from 'react'
import "./style.css"
import { Todo } from '../model'

interface Props{
    todos: Todo[];
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos, setToDos} : Props) => {
  return (
    <div className='todos'>
        {todos.map(todo => (
            <li>{todo.toDo} </li>
        ))}
    </div>
  )
}

export default TodoList