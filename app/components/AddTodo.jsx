import React from 'react'
import TodoInput from './TodoInput'
import { addTodo } from '@/actions/actions'

const AddTodo = () => {
  
  return (
    <>
      <form action={addTodo} className='relative flex flex-col gap-2 justify-center md:flex-row'>
        <TodoInput/>
        <label htmlFor='todoInput' className='todoLabel'>Enter Todo...</label>
        <button className='btnPrimary ' type='submit'>Add Todo</button>
      </form>
    </>
  )
}

export default AddTodo
