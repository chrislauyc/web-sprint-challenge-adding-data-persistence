const db = require("../../data/dbConfig");
interface Task {
    task_id?: number,
    task_description: string,
    task_notes?: string,
    task_completed?: boolean,
    project_id: number
};
const get=():Promise<Array<Task>>=>{
    return db("tasks").join("projects","projects.project_id","tasks.project_id");
};

const insert=async(task:Task): Promise<Task>=>{
    const [task_id] = await db("tasks").insert(task);
    return db("tasks").where({task_id}).first();
}

export = {
    get,
    insert
}