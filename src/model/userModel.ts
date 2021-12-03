import mongoose from 'mongoose';

export interface User
{
    id:number | undefined,
    firstName:string,
    lastName:string,
    age:number,
    email:string,
    password:string
}
const schema =mongoose.Schema;
export const UserModel = new schema({
    id:{type:mongoose.Schema.Types.ObjectId,required:false},
    firstName:String,
    lastName:String,
    age:Number,
    email:String,
    password:String 
})
