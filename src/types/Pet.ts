// Classes - Objetos instancias 
// com caracteristicas obrigatórias pré determinadas
export class Pet {
    // Atributo
    private _id: number;

    // Construtor + Atributos privados
    constructor(
        private _name: string, 
        private _species: string, 
        private _age: number, 
        private _color: string,
        private _race?: string,
    ) {
        this._id = new Date().getTime()
    }

    // Métodos acessores (getters)
    get id(): number {
        return this._id
    }

    get name(): string {
        return this._name;
    }

    get species(): string {
        return this._species;
    }

    get age(): number {
        return this._age;
    }

    get color(): string {
        return this._color;
    }

    get race(): string | undefined {
        return this._race;
    }



    // Métodos modificadores (setters)
    set name(name: string) {    

        if (name.length < 3) {
            throw new Error("O nome do pet deve ter pelo menos 3 caracteres.");
        }

        this._name = name;
    }

    set race(race: string | undefined) {
        if (race && race.length < 3) {  
            throw new Error("A raça do pet deve ter pelo menos 3 caracteres.");
        }
        this._race = race;
    }

    public toJSON() {
        return {
            id: this._id,
            name: this._name,
            species: this._species,
            age: this._age,
            color: this._color,
            race: this._race
        };
    }
}


// Interfaces - Objetos literais 
// com caracteristicas obrigatórias pré determinadas
// interface IPet {
//     name: string;
//     species: string;
//     age: number;
//     color: string;
//     race?: string;
// }


// Type aliases - Objetos literais 
// com caracteristicas obrigatórias pré determinadas
// type TPet = {
//     name: string;
//     species: string;
//     age: number;
//     color: string;
//     race?: string;
// };



