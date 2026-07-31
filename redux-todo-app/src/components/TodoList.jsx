import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, toggleTodo } from '../features/Todos/TodoSlice';

const TodoList = () => {

    const todos = useSelector((state)=>state.todos.todos);

    const dispatch = useDispatch();

  return (
    <div>
        {todos.map((todo)=>(
            <div key={todo.id}>
                <input type="checkbox" checked={todo.completed} onChange={()=>dispatch(toggleTodo(todo.id))} />
                <span style={{textDecoration: todo.completed ? 'line-through': "none"}}>{todo.text}</span>
                <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default TodoList