import mongoose from "mongoose";
import { bandaSchema } from "./banda.js";


const iconsSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome:{type: String, required:true},
    famoso:{type: Boolean, required:true},
    banda:bandaSchema,
}, {versionKey: false});

const icons = mongoose.model("icones", iconsSchema, "icons");    

export {icons, iconsSchema}