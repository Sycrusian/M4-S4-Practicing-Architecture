import express, { json } from "express";
import { userRouter } from "./routes/user";

const port: Number = 3000;

const app = express();

app.use(json());

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`API running on port ${port}.`);
});