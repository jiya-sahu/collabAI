import mongoose from "mongoose";
import projectmodel from '../models/project_model.js'

export const createProject = async ({
    name , userId
}) =>{
    if(!name){
        throw new Error('Name is required')
    }
    if(!userId){
        throw new Error("UserId is required")
    }
    try {
        const project = await projectmodel.create({
        name,
        users:[userId]
    })
    } catch (error) {
        if(error.code === 11000){
            throw new Error('Project name already exists');
        }
        throw error;
    }
    

    return project
}

export const getALlProjectsByUserId = async ({userId}) => {
    if(!userId){
        throw new Error('userId is required ')
    }

    const allUserProjects = await projectmodel.find({
        users:userId
    })

    return allUserProjects;
}


export const addUserToProject = async ({projectId, users , userId}) => {
    if(!projectId){
        throw new Error("ProjectId is required")
    }
     if(!mongoose.Types.ObjectId.isValid(projectId)){
        throw new Error("Invalid projectId")
    }
     if(!userId){
        throw new Error("userId is required")
    }

   
    if(!users){
        throw new Error("Users are required")
    }

    const project = await projectmodel.findOne({
        _id : projectId,
        users : userId
    })

    if(!project){
         throw new Error("Users not belong to this project")
    }

    const updateProject = await projectmodel.findOneAndUpdate({
        _id : projectId
    },{
        $addToSet:{
            users:{
                 $each : users
            }
           
        }
    },{
        new:true
    })

    return updateProject;
}


export const getProjectById = async ({ projectId }) => {
    if (!projectId) {
        throw new Error("projectId is required")
    }

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        throw new Error("Invalid projectId")
    }

    const project = await projectmodel.findOne({
        _id: projectId
    }).populate('users')

    return project;
}