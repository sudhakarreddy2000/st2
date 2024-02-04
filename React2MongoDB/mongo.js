const mongoose=require('mongoose')
// mongoose.connect("mongodb://localhost:27017/sudhakar")
// .then(()=>{
//     console.log("mongodb connected..")
// })
// .catch(()=>{
//     console.log("failed..")
// })
const connectDB=async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/sudhakar')
        console.log('connect')
    }catch(err){
        console.log('error',err)
    }
}
connectDB()

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const collection=mongoose.model("col3", newSchema)
module.exports=collection