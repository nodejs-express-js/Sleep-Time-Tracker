const jwt=require("jsonwebtoken");
require("dotenv").config()

const sleepTimesMiddleware=async(req,res,next)=>{
    try{
        const {authorization}=req.headers;
        if(!authorization){
            throw new Error("please provide auth token")
        }
        const token=authorization.split(" ")[1];
        const data=jwt.verify(token,process.env.JSON_SECRET_KEY);
        req.id=data.id;
        next()
    }
    catch(err){
        try{
            if(err.message){
                res.status(400).json({message:err.message})
            }
            else{
                res.status(500).json({message:"internal server error"})
            }
        }
        catch(err){
            res.status(500).json({message:"something went wrong with the server"})
        }
    }
}
module.exports=sleepTimesMiddleware