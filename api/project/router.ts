const projectRouter = require("express").Router();
const {checkProjectShape} = require("./middleware");
import projectModel = require("./model");
projectRouter.get("/",async(req,res,next)=>{
    try{
        const projects = await projectModel.get();
        for(const project of projects){
            project.project_completed = Boolean(project.project_completed);
        }
        res.status(200).json(projects);
    }
    catch(err){
        next(err);
    }
});
projectRouter.post("/",checkProjectShape,async(req,res,next)=>{
    try{
        const project = await projectModel.insert(req.body);
        // res.status(201).json({...req.body,project_id,project_completed:req.body.project_completed===1});
        project.project_completed = Boolean(project.project_completed);
        res.status(201).json(project);
    }
    catch(err){
        next(err);
    }
});

module.exports = projectRouter;