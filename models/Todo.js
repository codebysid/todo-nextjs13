import { Schema, model,models } from "mongoose";

const todoSchema=new Schema({
    title:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:new Date()
    },
    completed:{
        type:Boolean,
        default:false
    }
})

export default models.TodoModel || model("TodoModel",todoSchema)