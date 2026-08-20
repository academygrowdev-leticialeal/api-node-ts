# api-node-ts

Simple TypeScript + Express study API for managing pets. Built as a learning project to demonstrate a small layered Node.js API with controllers, services, routes and a Pet model.

## Stack
- Language: TypeScript (Node.js)
- Framework / runtime: Express 5
- Notable libraries:
  - express
  - ts-node-dev (for development hot reload)
  - typescript

## Features
- Basic CRUD operations for "pets"
- Query filtering on list endpoint by species and color
- Minimal validation in controllers
- Example JSON responses using a Pet model with `toJSON()` method

## Project structure
```
package.json         # npm scripts, dependencies
tsconfig.json        # TypeScript config
api.md               # API notes (present in repo)
src/
  server.ts          # app bootstrap, middleware and route mounting
  controllers/
    pet.controller.ts  # request handlers, validation, uses petService
  routes/
    pet.routes.ts       # route definitions (mounts PetController)
  services/
    pet.service.ts      # service layer (data management - in-memory/persistence)
  types/
    Pet.ts              # Pet model/class with toJSON() (used in controllers)
```

## How to run

1. Install dependencies
```bash
npm install
```

2. Run in development (uses ts-node-dev)
```bash
npm run dev
```

3. Build and run production (compile + node)
```bash
npm run start
```

The server listens on port `6543` by default:
- Base URL: http://localhost:6543/

## Available endpoints

- GET /  
  - Health check: returns `{ "status": "OK" }`

- GET /pets
  - List pets. Supports query params:
    - `species` (optional) — filter by species
    - `color` (optional) — filter by color
  - Response: array of pet objects (controller maps each pet with `toJSON()`)

- POST /pets
  - Create a new pet.
  - Required body fields (validated in controller): `name`, `species`, `color`, `age`
  - Optional: `race`
  - Example request:
    ```json
    {
      "name": "Rex",
      "species": "dog",
      "color": "brown",
      "age": 3,
      "race": "labrador"
    }
    ```
  - Successful response: 201 with created pet data

- PUT /pets/:id
  - Update a pet's `name` and optionally `race`.
  - Request body must include `name`.

- GET /pets/:id
  - Get pet by id (controller returns found pet)

- DELETE /pets/:id
  - Note: the repository's current routes file registers deletion incorrectly as a GET route for `/pets/:id`. See "Notes / Known issues" below.

## Example curl requests

List pets:
```bash
curl "http://localhost:6543/pets"
curl "http://localhost:6543/pets?species=dog&color=brown"
```

Create pet:
```bash
curl -X POST http://localhost:6543/pets \
  -H "Content-Type: application/json" \
  -d '{"name":"Rex","species":"dog","color":"brown","age":3,"race":"labrador"}'
```

Update pet:
```bash
curl -X PUT http://localhost:6543/pets/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Rex Updated","race":"retriever"}'
```

Get pet by id:
```bash
curl http://localhost:6543/pets/1
```

Delete pet (intended):
```bash
curl -X DELETE http://localhost:6543/pets/1
```

## Notes / Known issues
- The route definitions in `src/routes/pet.routes.ts` currently register two GET handlers for `/pets/:id`:
  - `router.get('/pets/:id', PetController.getById);`
  - `router.get('/pets/:id', PetController.delete);`
  The delete handler should be registered with `router.delete('/pets/:id', PetController.delete);`. Update the method to fix deletion behavior.
- The controllers rely on a `Pet` class with a `toJSON()` method and on `petService` methods: `listAll`, `create`, `update`, `getById`, `delete`. The implementation of those lives in `src/services/pet.service.ts` and `src/types/Pet.ts`.

## Contributing
This is a learning project. Feel free to open issues or PRs with fixes or improvements (for example: add proper error handling, persistence layer, tests, and API documentation).

## License
Licensed under ISC (see `package.json`).