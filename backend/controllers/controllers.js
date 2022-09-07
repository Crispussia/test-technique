
import * as posteServices from "../services/postes.js"

export const getPostes =  (req, res) => {
    try {
       
        const postes = posteServices.getPostes()
        console.log(postes
            )
        return res.status(200).json(postes);
    } catch (e) {
        console.log(e);
        return res.status(400).json({ status: 400, message: e.message });
    }
}


export const getPoste =  (req, res) => {
    try {
        const recordid  = req.params.recordid;
        const poste = posteServices.getPoste(recordid)
        console.log(poste)
        return res.status(200).json(poste);
    } catch (e) {
        console.log(e);
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export const updatePoste =  (req, res) => {
    try {
        const recordid  = req.params.recordid;
        const poste = req.body;

        posteServices.updatePoste(recordid, poste)

        return res.status(200);
    } catch (e) {
        console.log(e);
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export const deletePoste =  (req, res) => {
    try {
        const recordid  = req.params.recordid;
       posteServices.deletePoste(recordid)
       const postes = posteServices.getPostes()
        return res.status(200).json(postes);
    } catch (e) {
        console.log(e);
        return res.status(400).json({ status: 400, message: e.message });
    }
}