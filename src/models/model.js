import mongoose from "mongoose";

const iconsSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome:{type: String, required:true},
    banda:{type: String, required:false},
    famoso:{type: Boolean, required:true},
})

export const icons = mongoose.model("icones", iconsSchema, "icons")