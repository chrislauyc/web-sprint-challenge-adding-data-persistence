const projectRouter = require("express").Router();
const {checkProjectShape} = require("./middleware");
const projectModel = require("./model");
projectRouter.get("/",(req,res,next)=>{
    try{
        res.status(200).json(await projectModel.get());
    }
    catch(err){
        next(err);
    }
});
projectRouter.post("/",checkProjectShape,(req,res,next)=>{
    try{
        const [project_id] = await projectModel.insert(req.body);
        res.status(201).json({...req.body,project_id});
    }
    catch(err){
        next(err);
    }
});

module.exports = projectRouter;