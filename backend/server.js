const express=require("express")
const app=express()
require("dotenv").config()
const userRouter=require("./Routes/userRoutes")
const sleepTimesRouter=require("./Routes/sleepTimesRoutes")
const sleepTimesMiddleware=require("./MiddleWare/sleepTimesMiddleWare")
const cors=require("cors")

app.use(cors())
app.use(express.json())

app.use("/users", userRouter)
app.use("/sleepTimes",sleepTimesMiddleware)
app.use("/sleepTimes", sleepTimesRouter)
app.listen(8000||process.env.PORT,()=>{
    console.log("server is running on port 8000")
})