import { Pet } from "../types/Pet";

// Banco de dados em memória
const pets: Pet[] = [];


class PetRepository {
    public listAll(species?: string, color?: string): Pet[] {
        return pets.filter((pet) => (species && pet.species !== species) ? false : (color && pet.color !== color) ? false : true);
    }

    public create(newPet: Pet): void {
        pets.unshift(newPet);
    }

    public update(id: number, name: string, race?: string): Pet {
        const petFound = pets.find((pet) => pet.id === id)!;

        petFound.name = name;
        petFound.race = race;

        return petFound
    }

    public getById(id: number): Pet | null {
        const petFound = pets.find((pet) => pet.id === id);
        return petFound ?? null
    }

    public delete(id: number): Pet {
        const index = pets.findIndex((pet) => pet.id === id);

        const [petRemoved] = pets.splice(index, 1);

        return petRemoved
    }
}

export const petRepository = new PetRepository();