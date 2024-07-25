import express from "express";
import env from "dotenv"
import cors from "cors"
import uploadRouter from "./Router/upload-route.js";
import connectDb from "./utils/db.js";
const app = express()
env.config()
app.use(cors({
    origin: 'http://localhost:5173', // Replace this with the origin of your frontend
    credentials: true, // if you need to handle cookies or authentication tokens
  }));
app.use(uploadRouter)
app.use(express.json());
app.use("/public", express.static("public")); // Serve static files from the public directory

// Use the upload router
// app.use("/api", uploadRouter);
// import cors from "cors"
const PORT = process.env.PORT || 5000
connectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running at ${PORT}`)
    })
})

