const express = require("express");

const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

const server = express();

server.use(express.json());

server.use("/api/projects",projectRouter);
server.use("/api/resources",resourceRouter);
server.use("/api/tasks",taskRouter);

server.use((err,req,res,next)=>{
    let message: string = "server error";
    try{
        message = err.toString();
    }
    catch{
        try{
            message = err.message;
        }
        catch{
            //do nothing
        }
    }
    res.status(500).json({message});
});
export = server;