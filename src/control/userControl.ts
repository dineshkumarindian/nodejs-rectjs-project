import { createUser, findUser, findOneUser, findDeleteUser ,findUserData,updateUserData,findGetUser} from "../service/userservice";
import { User, UserModel } from "../model/userModel";
// import { response } from "express";

export const createControlList = async (req: any, res: any) => {
    try {
        const dataItem: User = req.body;
        const saveList: any = await createUser(dataItem);
        console.log(saveList);
        res.send(saveList).status(201);

    }
    catch (err) {
        console.log(err);
        res.send(err).status(404);

    }
}
export const getDataControlList = async (req:any,res:any) =>{
    try{
        const getdata:User[] = await findUserData();
        res.send(getdata).status(200);

    }
    catch(err){
        console.log(err);
        res.send(err).status(404);
    }
}
export const updateDataControlList = async (req:any,res:any) =>{
    try{
        const getId = req.params.id;
        const bodyData = req.body;
        const updateData = await updateUserData(getId,bodyData);
        console.log(updateData);
        res.send(updateData);
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
}
export const getControlList = async (req: any, res: any) => {
    try {
        const getEmail:any = req.params.email;
        const getpassword:any = req.params.password;
        var response;
        console.log("getEmail is :"+getEmail);
        const getList = await findUser(getEmail,getpassword);
        console.log(getList);
        if(getList.length>0){
        response = "success";

        }
        else{
            response="failure";
        }
        res.send(response).status(200);
    }
    catch (err) {
        console.log(err);
        res.send(err).status(404);
    }
}
export const updateControlList = async (req: any, res: any) => {
    try {
        const email: String = req.params.email;
        const pass:String= req.body;
        console.log(email);
        console.log(pass);
        const userResponse: any = await findOneUser(email, pass);
        res.send("success").status(200);
    }
    catch (err) {
        console.log(err);
        res.send(err).status(404);
    }
}
export const deleteControlList = async (req: any, res: any) => {
    try {
        const id: String = req.params.id;
        console.log(id);
        const deleteUser: any = await findDeleteUser(id);
        res.send(deleteUser).status(200);

    }
    catch (err) {
        res.send(err).status(404);
    }
}
export const getEmailControlList = async (req:any, res:any) =>{
    try{
        const email:String = req.params.email;
        console.log("the email is",email);
        const getEmailControl:any = await findGetUser(email);
        res.send(getEmailControl).status(200);
    }
    catch(err){
        console.log(err);
        res.send(err).status(404);
    }
}