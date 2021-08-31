const taskRouter = require("express").Router();
import taskModel = require("./model");
import middleware = require("./middleware");
taskRouter.get("/",async(req,res,next)=>{
    try{
        const tasks = await taskModel.get()
        for(const task of tasks){
            task.task_completed = Boolean(task.task_completed);
        }
        res.status(200).json(tasks);
    }
    catch(err){
        next(err);
    }
});
taskRouter.post("/",middleware.checkTaskShape,async(req,res,next)=>{
    try{
        const task = await taskModel.insert(req.body);
        task.task_completed = Boolean(task.task_completed);
        res.status(201).json(task);
    }
    catch(err){
        next(err);
    }
});
module.exports = taskRouter;