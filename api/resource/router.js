const resourceRouter = require("express").Router();
const resourceModel = require("./model");
const {checkResourceShape} = require("./middleware");
resourceRouter.get("/",async(req,res,next)=>{
    try{
        res.status(200).json(await resourceModel.get());
    }
    catch(err){
        next(err);
    }
});
resourceRouter.post("/",checkResourceShape,async(req,res,next)=>{
    try{
        const resource = await resourceModel.insert(req.body);
        res.status(201).json(resource);
    }
    catch(err){
        next(err);
    }
});

module.exports = resourceRouter;