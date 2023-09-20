"use client"
import React, { useState } from 'react'

const TodoInput = () => {
    const [todoText,setTodoText]=useState("")
    return (
        <input 
            className='todoInput' 
            placeholder='Enter Todo...' 
            id='todoInput' 
            name='todoInput' 
            type='text' 
            value={todoText} 
            onChange={e=>setTodoText(e.target.value)} 
            required
        />
    )

}

export default TodoInput
