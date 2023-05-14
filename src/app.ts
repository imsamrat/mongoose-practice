import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

//Application routes
import userRoute from './app/modules/user/user.route';

//using cors
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/api/v1/user", userRoute);
app.use("/api/v1/user", userRoute);

export default app;
