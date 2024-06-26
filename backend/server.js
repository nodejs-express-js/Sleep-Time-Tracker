const express=require("express")
const app=express()
require("dotenv").config()
const userRouter=require("./Routes/userRoutes")

app.use(express.json())

app.use("/users", userRouter)
app.listen(8000||process.env.PORT,()=>{
    console.log("server is running on port 8000")
})