import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";
import quizeRouter from "./routes/quize-routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
app.use("/api", quizeRouter);
const port = process.env.PORT || 8000

mongoose
  .connect(
"mongodb+srv://admin:Ajay789@cluster0.empw8we.mongodb.net/Blog?retryWrites=true&w=majority",
    //"mongodb+srv://admin:ESjtvUtwLfVb8c2F@cluster0.tdimc.mongodb.net/Blog?retryWrites=true&w=majority",
    // { 
    //   useNewUrlParser: true,
    //   useCreateIndex: true
    // }
  )
  .then(() => app.listen(port, ()=>{
    // console.log(`server connected to http://localhost:${port}`)

  }))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));
