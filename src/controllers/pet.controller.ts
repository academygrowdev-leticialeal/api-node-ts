import { Request, Response } from "express";
import { Pet } from "../types/Pet";
import { petService } from "../services/pet.service";

export class PetController {
    public static listAll(req: Request, res: Response) {
        const { species, color } = req.query;

        const pets = petService.listAll(species as string, color as string);

        return res.status(200).json(pets.map((pet) => pet.toJSON()));
    }

    public static create(req: Request, res: Response) {
        // utilização do body
        const { name, species, color, age, race } = req.body;

        if (!name) {
            return res.status(400).json({ error: "O nome do pet é obrigatório." });
        }

        if (!species) {
            return res.status(400).json({ error: "A espécie do pet é obrigatória." });
        }

        if (!color) {
            return res.status(400).json({ error: "A cor do pet é obrigatória." });
        }

        if (!age) {
            return res.status(400).json({ error: "A idade do pet é obrigatória." });
        }

        const newPet = new Pet(name, species, age, color, race);

        petService.create(newPet);

        return res.status(201).json({ success: true, message: "Pet adicionado com sucesso!", data: newPet.toJSON() });
    }

    public static update(req: Request, res: Response) {
        // utilização do body
        const { id } = req.params;
        const { name, race } = req.body;

        if (!name) {
            return res.status(400).json({ error: "O nome do pet é obrigatório." });
        }

        const petUpdated = petService.update(Number(id), name, race);

        return res.status(201).json({ success: true, message: "Pet atualizado com sucesso!", data: petUpdated.toJSON() });
    }

    public static getById(req: Request, res: Response) {
        const { id } = req.params;

        const pet = petService.getById(Number(id));

        return res.status(201).json({ success: true, message: "Pet encontrado com sucesso!", data: pet.toJSON() });
    }

    public static delete(req: Request, res: Response) {
        const { id } = req.params;

        const petDeleted = petService.delete(Number(id));

        return res.status(201).json({ success: true, message: "Pet deletado com sucesso!", data: petDeleted.toJSON() });
    }
}