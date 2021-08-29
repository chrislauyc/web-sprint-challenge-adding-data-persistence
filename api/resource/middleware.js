const yup = require("yup");
const db = require("../../data/dbConfig");

const schema = yup.object().shape({
    resource_name: yup.string().required().transform(async(resource_name)=>{
        const resourcesFound = await db("resources").where({resource_name});
        if(resourcesFound.length !== 0){
            return yup.ValidationError("resource_name already exists");
        }
        else{
            return resource_name;
        }
    }),
    resource_description: yup.string()
});

const checkResourceShape=async(req,res,next)=>{
    const keys = Object.keys(schema.getDefaultFromShape())
    for(const key of keys){
        try{
            await yup.reach(schema,key,req.body[key]);
        }
        catch(error){
            res.status(400).json({message:error.errors[0]});
        }
    }
    next();
}

module.exports = {
    checkResourceShape
}