import { Router } from "express";
import { methods as futureController } from '../controllers/future.controller.js';

const futureRouter = Router(); // router creation

//end points
futureRouter.get('/', futureController.getAllPuzzle);
futureRouter.get('/:id', futureController.getPuzzleById);

export default futureRouter;