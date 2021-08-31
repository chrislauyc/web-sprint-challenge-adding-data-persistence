require("dotenv").config();
import server = require("./api/server");

const port: string = process.env.PORT || "5000";

server.listen(port,()=>console.log(`server is listening on ${port}`))