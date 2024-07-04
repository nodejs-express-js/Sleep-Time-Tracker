const db=require("../models/index")

const getSleepTimes=async(req,res)=>{

try{
const sleepTimes=await db.sleeptimes.findAll({where:{userid:req.id}})
res.status(200).json(sleepTimes);
}
catch(err){
    res.status(400).json({message:err.message});
}
}
function isIsoDate(str) {
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) return false;
    const d = new Date(str); 
    return d instanceof Date && !isNaN(d.getTime()) && d.toISOString()===str; // valid date 
}
const postSleepTimes=async(req,res)=>{
    try{
        let {time,date}=req.body;
        if(!time || !date){
            throw new Error("Invalid sleep time or date")
        }
        if(!isIsoDate(date)){
            throw new Error("please provide date in utc format")
        }
        date=new Date(date).toISOString()
        const sleepTimes=await db.sleeptimes.create({
            userid:req.id,
            time:time,
            date:date
        })
        res.status(200).json(sleepTimes)
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
}
const deleteSleepTimes=async(req,res)=>{
    try{
        const {id}=req.body;
        const sleepTimes=await db.sleeptimes.destroy({where:{userid:req.id,id:id}})
        res.status(200).json(sleepTimes)
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
}

module.exports={getSleepTimes,postSleepTimes,deleteSleepTimes}