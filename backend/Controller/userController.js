const jwt=require("jsonwebtoken");
const validator=require("validator");
const bcrypt=require("bcrypt");
const db=require("../models/index")
require("dotenv").config()

const createToken=(id)=>{
    const token=jwt.sign({id},process.env.JSON_SECRET_KEY,{expiresIn:"3d"})
    return token;
}

const signUpHelper=async(name,email,password)=>{
if(!validator.isAlpha(name)){
    throw new Error("name must be alphabet")
}
if(!validator.isEmail(email)){
    throw new Error("enter a valid email address")
}
if(!validator.isStrongPassword(password)){
 throw new Error("password must contain at least one uppercase,lowercase,numeric and special characters and must be atleast 8 characters long")   
}
const salt=await bcrypt.genSalt(10);
const hashpassword=await bcrypt.hash(password,salt);
return hashpassword
}

const userSignUpController=async(req,res)=>{
try{
const {name,email,password}=req.body
if(!name || !email || !password){
    throw  Error("Please enter a name, email and password")
}
const hashpassword=await signUpHelper(name,email,password)
const user=await db.user.create({name:name,email:email,password:hashpassword})
const token=createToken(user.dataValues.id)
res.status(200).json({email:user.dataValues.email,token:token})
}
catch(err){
res.status(400).json({message:err.message});
}
}


const userLoginController=async(req,res)=>{
try{
const {email,password}=req.body
if(!email || !password){
    throw new Error("Invalid email or password")
}
const user=await db.user.findOne({where: {email:email},})
if(!user){
    throw new Error("user does not exist")
}
const isMatch=await bcrypt.compare(password,user.dataValues.password)
if(!isMatch){
throw Error("password mismatch")
}

const token=createToken(user.dataValues.id)
res.status(200).json({email:email,token:token})
}
catch(err){
    res.status(400).json({message:err.message});
}
}

module.exports={userSignUpController,userLoginController}