const db = require("../../data/dbConfig");

const get=()=>{
    return db("tasks");
};

const insert=(task)=>{
    return db("tasks").insert(task);
}

module.exports = {
    get,
    insert
}