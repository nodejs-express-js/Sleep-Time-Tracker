const express=require("express");
const userRouter=express.Router();
const userControllers=require("../Controller/userController")
userRouter.post("/signup",userControllers.userSignUpController)
userRouter.post("/login",userControllers.userLoginController)


module.exports =userRouter;