const db = require("../../data/dbConfig");

const get=()=>{
    return db("tasks").join("projects","projects.project_id","tasks.project_id");
};

const insert=async(task)=>{
    const [task_id] = await db("tasks").insert(task);
    return db("tasks").where({task_id}).first();
}

module.exports = {
    get,
    insert
}