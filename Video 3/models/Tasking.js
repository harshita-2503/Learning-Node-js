const mongoose=require("mongoose")

const taskSchema=({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        enum:['High','Medium','Low'],
        default:'Medium'
    },
    dueDate:{
        type:Date,
        required:true
    },


})

const Task=mongoose.model('Task',taskSchema)

module.exports=Task;