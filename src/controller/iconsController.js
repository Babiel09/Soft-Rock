import { icons } from './models/model.js';

export default class iconsController {
    
    static async getAllIcons(req, res){
        const iconsGet = await icons.find({});
        res.status(200).json(iconsGet)
    }
}
