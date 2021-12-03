import mongoose from 'mongoose';
import { UserModel } from '../model/userModel';

export const UserModelList = mongoose.model("users",UserModel);
export default UserModelList;

export const saveList = async (data:any) =>
{
    const userDetail = new UserModelList(data);
    console.log(userDetail);
    return await userDetail.save();
}
export const getDataList = async () =>{
    return await UserModelList.find({});
}
export const updateDataList = async(id:any,body:any) =>{
    return await UserModelList.findByIdAndUpdate({_id:id},body);
}

export const getList = async (email:any,password:any) =>{
    console.log("getting email"+email+"getting password"+password);
    return await UserModelList.find({email:email},{password:password});
    
}

export const updateList = async(email:any,body:any) =>
{
    return await UserModelList.findOneAndUpdate({email:email},body);
}

export const deleteList = async(id:any) =>{
    console.log("the delete id is"+id);
    return await UserModelList.findByIdAndRemove({_id:id});
}
export const getEmailList = async(email:any) =>{
    console.log("the email is.....-----",email);
    return await UserModelList.find({email:email});
}
