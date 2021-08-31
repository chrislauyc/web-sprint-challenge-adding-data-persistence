import db = require("../../data/dbConfig");
interface Project{
    project_id?:number,
    project_name:string,
    project_description?:string,
    project_completed?:boolean
}
const get=():Promise<Array<Project>>=>{
    return db("projects");
};
const insert=async(project:Project):Promise<Project>=>{
    const [project_id] :Array<number> = await db("projects").insert(project);
    return db("projects").where({project_id}).first();
}
export = {
    get,
    insert
}