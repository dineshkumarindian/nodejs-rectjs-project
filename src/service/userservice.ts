import { saveList,getList,updateList,deleteList,getDataList,updateDataList, getEmailList} from "../dao/userdao";

export const createUser = async(body:any) =>
{
    const product = await saveList(body);
    return product;

}
export const findUserData = async () =>{
    const findUser = await getDataList();
    return findUser;
}
export const updateUserData = async(id:any,body:any) =>{
    const updateUser = await updateDataList(id,body);
    return updateUser;
}

export const findUser = async(email:any,password:any) =>{
    const userFind = await getList(email,password);
    return userFind;
}
export const findOneUser = async(email:any,body:any) =>{
    const userFindOne = await updateList(email,body);
    return userFindOne;

}
export const findDeleteUser = async(id:any) =>{
    const  userFindDel = await deleteList(id);
    return userFindDel;
}
export const findGetUser = async(email:any) =>{
    const userGetEmail = await getEmailList(email);
    return userGetEmail;
}