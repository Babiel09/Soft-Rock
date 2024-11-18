import mongoose from "mongoose";

const iconsSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome:{type: String, required:true},
    banda:{type: String, required:false},
    famoso:{type: Boolean, required:true},
}, {versionKey: false});

const icons = mongoose.model("icones", iconsSchema, "icons");    

export {icons, iconsSchema}