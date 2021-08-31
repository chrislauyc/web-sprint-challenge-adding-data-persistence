const yup = require("yup");
const db = require("../../data/dbConfig");

const schema = yup.object().shape({
    project_name: yup.string().required().transform(async(value)=>{
        const projectsFound = await db("projects").where({project_name: value});
        if(projectsFound.length !== 0){
            return yup.ValidationError("project_name already exists");
        }
        else{
            return value;
        }
    }),
    project_description: yup.string(),
    project_completed:  yup.boolean()
});

const checkProjectShape=async(req,res,next)=>{
    const keys = Object.keys(schema.getDefaultFromShape())
    for(const key of keys){
        try{
            await yup.reach(schema,key,req.body[key]);
        }
        catch(error:any){
            res.status(400).json({message:error.errors[0]});
        }
    }
    next();
};

export={
    checkProjectShape,
}