const db = require("../../data/dbConfig");
const get=()=>{
    return db("projects");
};
const insert=async(project)=>{
    const [project_id] = await db("projects").insert(project);
    return db("projects").where({project_id}).first();
}
module.exports = {
    get,
    insert
}