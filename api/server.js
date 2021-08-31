"use strict";
var express = require("express");
var projectRouter = require("./project/router");
var resourceRouter = require("./resource/router");
var taskRouter = require("./task/router");
var server = express();
server.use(express.json());
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);
server.use(function (err, req, res, next) {
    var message = "server error";
    try {
        message = err.toString();
    }
    catch (_a) {
        try {
            message = err.message;
        }
        catch (_b) {
            //do nothing
        }
    }
    res.status(500).json({ message: message });
});
module.exports = server;
