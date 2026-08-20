import { Router } from "express";
import { PetController } from "../controllers/pet.controller";

export class PetRoutes {
    public static bind() {
        const router = Router();

        router.get('/pets', PetController.listAll);
        router.post('/pets', PetController.create);
        router.put('/pets/:id', PetController.update);
        router.get('/pets/:id', PetController.getById);
        router.get('/pets/:id', PetController.delete);

        return router
    }
}