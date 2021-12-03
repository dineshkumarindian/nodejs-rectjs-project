import express from 'express';
import { createControlList, deleteControlList, getControlList, updateControlList, getDataControlList ,updateDataControlList,getEmailControlList} from '../control/userControl';
export const route = (app: express.Application) => {

    app.post("/register", createControlList);
    app.get("/login/:email/:password", getControlList);
    app.put("/forgetPassword/:email", updateControlList);
    app.get("/get", getDataControlList);
    app.delete("/get/:id", deleteControlList);
    app.put("/get/:id",updateDataControlList);
    app.get("/getmail/:email",getEmailControlList);

}