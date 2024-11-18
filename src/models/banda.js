import mongoose from "mongoose";

const bandaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    fundation: {type: Date, required: true}
}, {versionKey: false});

const banda = mongoose.model("Bandas", bandaSchema, "Banda");

export {banda, bandaSchema};