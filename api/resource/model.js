const db = require("../../data/dbConfig");

const get=()=>{
    return db("resources");
};

const insert=(resource)=>{
    return db("resources").insert(resource);
}

module.exports = {
    get,
    insert
}