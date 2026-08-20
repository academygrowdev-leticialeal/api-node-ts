import { Pet } from "../types/Pet";
import { petRepository } from "../repositories/pet.repository";

class PetService {

    public listAll(species?: string, color?: string): Pet[] {
        //... 

        return petRepository.listAll(species, color);
    }

    public create(newPet: Pet) {
        
        // ... 
        if(newPet.age > 10 && newPet.species === 'cat') {
            throw new Error('Não é possível cadastrar gatos com mais de 10 anos')
        }


        petRepository.create(newPet);
    }

    public update(id: number, name: string, race?: string): Pet {
        if(!petRepository.getById(id)) {
            throw new Error('Pet não encontrado pelo ID informado')
        }

        // ...
        //...

        return petRepository.update(id, name, race)
    }

    public getById(id: number): Pet {
        const pet = petRepository.getById(id)

        if(!pet) {
             throw new Error('Pet não encontrado pelo ID informado')
        }

        return pet
    }

    public delete(id: number): Pet {
        if(!petRepository.getById(id)) {
            throw new Error('Pet não encontrado pelo ID informado')
        }

        // ...
        //...

        return petRepository.delete(id)
    }
}

export const petService = new PetService();