const taskRouter = require("express").Router();
const taskModel = require("./model");
const {checkTaskShape} = require("./middleware");
taskRouter.get("/",async(req,res,next)=>{
    try{
        const tasks = await taskModel.get()
        for(const task of tasks){
            task.task_completed = task.task_completed === 1;
        }
        res.status(200).json(tasks);
    }
    catch(err){
        next(err);
    }
});
taskRouter.post("/",checkTaskShape,async(req,res,next)=>{
    try{
        const task = await taskModel.insert(req.body);
        task.task_completed = task.task_completed === 1;
        res.status(201).json(task);
    }
    catch(err){
        next(err);
    }
});
module.exports = taskRouter;