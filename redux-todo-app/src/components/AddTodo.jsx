import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/Todos/TodoSlice';

const AddTodo = () => {

    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = ()=>{
        if(!input.trim()) return;

        dispatch(addTodo(input));

        setInput("");
    }
  return (
    <div>
        <input type="text" placeholder='Enter Todo' value={input} onChange={(e)=>setInput(e.target.value)} />
        <button onClick={handleSubmit}>Add Todo</button>
    </div>
  )
}

export default AddTodo