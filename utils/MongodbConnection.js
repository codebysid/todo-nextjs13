import mongoose, { mongo } from "mongoose";

const connectToMongoDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_CONNECTION)
    }catch(e){
        console.log(e)
        return
    }
    return {msg:"Successful",status:200}
}

export {
    connectToMongoDB
}