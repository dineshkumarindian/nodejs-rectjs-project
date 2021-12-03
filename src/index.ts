import *as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from 'mongoose';
import { route } from './route/userRoute';

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();
app.use(cors());

app.use(express.json());

app.listen(PORT, () => {
    console.log("Listening on port" + PORT);
})
const connect = () => {
    const db: string = process.env.MONGODB as string;

    console.log("Db is" + db);
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/registerUser')
    .then(() => console.log("database connected"))
    .catch((err) => console.log(err));

}
connect();
route(app);

export default app;
