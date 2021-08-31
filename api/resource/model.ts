import db = require("../../data/dbConfig");
interface Resource{
    resource_id?: number,
    resource_name: string,
    resource_description?: string
}
const get=(): Promise<Array<Resource>>=>{
    return db("resources");
};

const insert=async(resource:Resource): Promise<Resource>=>{
    const [resource_id] = await db("resources").insert(resource);
    return db("resources").where({resource_id}).first();
}

export = {
    get,
    insert
}
