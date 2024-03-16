import { Router } from "express";
import { methods as pastController } from '../controllers/past.controller.js';

const pastRouter = Router(); // router creation

//end points
pastRouter.get('/', pastController.getAllPuzzle);
pastRouter.get('/:id', pastController.getPuzzleById);

export default pastRouter;