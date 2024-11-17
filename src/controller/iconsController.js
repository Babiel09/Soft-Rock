import { icons } from "../models/model.js";

export default class iconsController {

    static async getAllIcons(req, res){
        try{
            const iconsGet = await icons.find({});
            res.status(200).json(iconsGet)
        }
        catch(err){
            console.error(err)
            res.status(500).send("Unxpected error")
        };
        
    };

    static async postIcon(req, res) {
        try{
            const icondata = req.body;
            const newIcon = await icons.create(icondata);  
            res.status(201).json(newIcon);
        }
        catch(err){
            console.log(err.message);
            res.status(400).json({server: "Deu merda nessa requisição aí bro"});
        }
    };

    static async getOneIcon(req, res) {
        try{
            const id = req.params.id;
            const iconEspecificado = await icons.findById(id);
            res.status(200).json(iconEspecificado);
        } catch(err){
            console.log(err);
            res.status(400).json({server: "Deu merda nessa requisição aí bro"});
        };
    };

    static async putIcon(req, res) {
        try{
            const id = req.params.id;
            const iconUpdate = await icons.findByIdAndUpdate(id, req.body);
            res.status(202).json(iconUpdate)
        } catch(err){
            console.log(err);
            res.status(400).json({server: "Deu merda nessa requisição aí bro"});
        };
    }

    static async deleteIcon(req, res) {
        try{
            const id = req.params.id
            await icons.findByIdAndDelete(id)
            res.status(204).json({server:"Deu bom, o icone foi deletado da sua lista"})
        }catch(err){
            console.log(err);
            res.status(400).json({server: "Deu merda nessa requisição aí bro"});
        };
    }
};
