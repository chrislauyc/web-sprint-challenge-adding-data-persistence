const taskRouter = require("express").Router();
const taskModel = require("./model");
const {checkTaskShape} = require("./middleware");
taskRouter.get("/",(req,res,next)=>{
    try{
        res.status(200).json(await taskModel.get());
    }
    catch(err){
        next(err);
    }
});
taskRouter.post("/",checkTaskShape,(req,res,next)=>{
    try{
        const [task_id] = await taskModel.insert(req.body);
        res.status(201).json({...req.body,task_id});
    }
    catch(err){
        next(err);
    }
});
module.exports = taskRouter;