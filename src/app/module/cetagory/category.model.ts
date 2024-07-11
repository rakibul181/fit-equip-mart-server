import { model, Schema } from "mongoose";
import { TCategory } from "./category.interface";

const categorySchemaModel = new Schema<TCategory>({
    name:String,
    image:String
})


export const Category = model<TCategory>('category',categorySchemaModel)