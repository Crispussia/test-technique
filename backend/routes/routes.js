import express from 'express';
import * as postesControolers from "../controllers/controllers.js"

const router = express.Router();

router.get('/', postesControolers.getPostes)
router.get('/:recordid',postesControolers.getPoste)
router.put('/:recordid',postesControolers.updatePoste)
router.delete('/:recordid',postesControolers.deletePoste)

export default router;