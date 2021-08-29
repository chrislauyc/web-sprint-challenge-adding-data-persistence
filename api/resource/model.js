const db = require("../../data/dbConfig");

const get=()=>{
    return db("resources");
};

const insert=async(resource)=>{
    const [resource_id] = await db("resources").insert(resource);
    return db("resources").where({resource_id}).first();
}

module.exports = {
    get,
    insert
}