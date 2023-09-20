import React from 'react'
import { connectToMongoDB } from '@/utils/MongodbConnection'
import TodoModel from "../../models/Todo"
import Button from './Button'
import { completeTodo, deleteTodo } from '@/actions/actions'

const getTodos=async()=>{
  try{
    const connect=await connectToMongoDB()
    if(!connect) return {error:"Connection Denied"}
    const allTodos=await TodoModel.find()
    return allTodos
  }catch(e){
    return {error:e}
  }
}

const DisplayTodos = async() => {
  const allTodos=await getTodos()
  return (
    <div className='md:w-full md:flex md:flex-row md:gap-4 md:flex-wrap'>
      {
        allTodos.map((todo)=>{
          return <div key={todo._id} className='flex flex-col items-start gap-2 w-60 justify-between flex-wrap pb-4 mb-4 p-2 shadow-lg border'>
            <p  
            className={`${todo.completed && "line-through" } w-full break-words md:text-2xl`}>
              {todo.title}
            </p>
            <div className='flex flex-row gap-2'>
            {!todo.completed && 
              <Button 
                content="👍" 
                handle={completeTodo} 
                id={todo._id.toString()}
                tooltip="Done"
                /> 
            }
            <Button 
              content="🗑️" 
              handle={deleteTodo} 
              id={todo._id.toString()} 
              tooltip="Delete"
            />
            </div>
          </div>
        })
      } 
    </div>
  )
}

export default DisplayTodos
