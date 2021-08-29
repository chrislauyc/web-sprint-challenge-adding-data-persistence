const db = require("../../data/dbConfig");
const get=()=>{
    return db("projects");
};
const insert=(project)=>{
    return db("projects").insert(project);
}
module.exports = {
    get,
    insert
}