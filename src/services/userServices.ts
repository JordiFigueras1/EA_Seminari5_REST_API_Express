import { usersofDB } from '../modelos/types_d_users'

export const getEntries = {
    getAll: async()=>{
    return await usersofDB.find();
    },
    findById: async(id:string)=>{
        return await usersofDB.findById(id);
    },
    linkExperience: async(userId: string, experienceId: string) => {
        return await usersofDB.findByIdAndUpdate(userId, { $addToSet: { experiencies: experienceId } }, { new: true });
    },
    unlinkExperience: async(userId: string, experienceId: string) => {
        return await usersofDB.findByIdAndUpdate(userId, { $pull: { experiencies: experienceId } }, { new: true });
    },
    
    create: async(entry:object)=>{
        return await usersofDB.create(entry);
    },
    update: async(id:string,body:object)=>{
        console.log(body);
        return await usersofDB.findByIdAndUpdate(id,body,{$new:true});
    },
    delete: async(id:string)=>{
        return await usersofDB.findByIdAndDelete(id);
    }
}