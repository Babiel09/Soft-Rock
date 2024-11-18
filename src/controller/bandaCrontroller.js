import { banda } from "../models/banda.js";

export default class bandaCrontroller {
    static async getAllBandas(req, res) {
        try{    
            const bandas = await banda.find({});
            res.status(200).json(bandas);
        } catch(err) {
            console.log(err.message);
            res.status(500).json({server:"Fudeu"}) ;
        };
    };

    static async getOneBanda(req, res) {
        try{
            const id = req.params.id;
            const sprecifiedBanda = await banda.findById(id);
            res.status(200).json(sprecifiedBanda);
        }catch(err) {
            console.log(err.message);
            res.status(400).json({server:"Verifique os parâmetros da requisição GET by ID"}) ;
        };
    };

    static async postBanda (req, res) {
        try{
            const bandaData = req.body;
            const newBanda = new banda(bandaData);
            const saveBanda = await newBanda.save();
            res.status(201).json(newBanda);

        } catch(err) {
            console.log(err.message);
            res.status(400).json({server:"Verifique os parâmetros da requisição POST"}) ;
        };
    };

    static async putBanda(req, res) {
        try{
            const id = req.params.id;
            const updateBanda = await banda.findByIdAndUpdate(id, req.body);
            res.status(202).json(newBanda);

        } catch(err) {
            console.log(err.message);
            res.status(400).json({server:"Verifique os parâmetros da requisição PUT"});
        };
    };
    static async deletebanda(req, res) {
        try {
            const id = req.params.id;
            const bandaToBeDeleted = await findByIdAndDelete(id);
            res.status(204).send({server:"Banda Deletada com sucesso"});
            
        }catch(err) {
            console.log(err.message);
            res.status(400).json({server:"Verifique os parâmetros da requisição PUT"});
        };
    };
};