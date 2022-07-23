import mongoose from 'mongoose'

//Defining schema
const studentSchema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    age:{type:Number, required:true,min:18,max:60},
    fees:{type:Number,required:true}
})

//Model
const StudentModel = mongoose.model("student", studentSchema)

export default StudentModel