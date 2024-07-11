import { TCategory } from "./category.interface"
import { Category } from "./category.model"

const createCategoryIntoDB = async(payload:TCategory)=>{
    const result = Category.create(payload)
    return result
}

const getAllCategoryFromDB = async()=>{
    const result = Category.find()
    return result

}
const getSingleCategoryFromDB = async (id:string) =>{
    const result  =  Category.findById(id)
    return result 
}



export const categoryServices = {
    createCategoryIntoDB,
    getAllCategoryFromDB,
    getSingleCategoryFromDB
}