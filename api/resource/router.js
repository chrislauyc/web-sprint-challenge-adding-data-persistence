const resourceRouter = require("express").Router();
const resourceModel = require("./model");
const {checkResourceShape} = require("./middleware");
resourceRouter.get("/",(req,res,next)=>{
    try{
        res.status(200).json(await resourceModel.get());
    }
    catch(err){
        next(err);
    }
});
resourceRouter.post("/",checkResourceShape,(req,res,next)=>{
    try{
        const [resource_id] = await resourceModel.insert(req.body);
        res.status(201).json({...req.body,resource_id});
    }
    catch(err){
        next(err);
    }
});

module.exports = resourceRouter;