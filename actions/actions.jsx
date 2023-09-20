"use server"
import { connectToMongoDB } from '@/utils/MongodbConnection'
import TodoModel from "../models/Todo"
import { revalidatePath } from 'next/cache'

export const addTodo=async(formData)=>{
    try{
        const connect=await connectToMongoDB()
        if(connect.error){ 
            console.log(connect.error) 
            return
        }
      await TodoModel.create({
        title:formData.get("todoInput")
      })
      revalidatePath("/")
      return {msg:"Successful",status:200}
    }catch(e){
      return {error:e}
    }
  }

export const completeTodo=async(id)=>{
    try{
        const connect=await connectToMongoDB()
            if(connect.error){ 
                console.log(connect.error) 
                return
            }
        await TodoModel.updateOne({_id:id},{completed:true})
        revalidatePath("/")
        return {msg:"Todo Completed"}
    }catch(e){
        console.log(e)
        return
    }
}

export const deleteTodo=async(id)=>{
    try{
        const connect=await connectToMongoDB()
            if(connect.error){ 
                console.log(connect.error) 
                return
            }
        await TodoModel.deleteOne({_id:id})
        revalidatePath("/")

    }catch(e){
        console.log(e)
        return
    }
}