# Swarup Patil — Week 2 Full Stack Development

Student: Swarup Patil | B.Sc. Computer Science, Third Year  
Skills: HTML, CSS, JavaScript, React

## Included
- `react-week2`: product information component, props/state demo, To-Do app, React Router pages, CSS Modules.
- `todo-api`: Express + MongoDB CRUD REST API.
- `auth-api`: user registration/login with bcrypt password hashing and JWT.
- `notes-api`: JWT-protected notes CRUD API.
- `postman/week2-api-collection.json`: starter Postman collection.

## Requirements
Install Node.js LTS and MongoDB (or use MongoDB Atlas). For each backend, copy `.env.example` to `.env`, check the MongoDB URI and JWT secret, then run `npm install` and `npm run dev`.

PowerShell copy command:
`Copy-Item .env.example .env`

## Run React
```bash
cd react-week2
npm install
npm run dev
```

## Run backend APIs
Run each backend separately in its own terminal:
- `todo-api` on port 5001
- `auth-api` on port 5002
- `notes-api` on port 5003

For `notes-api`, use the same `JWT_SECRET` as `auth-api`; tokens from auth-api are used to access notes.

## Routes
To-Do API (`http://localhost:5001`):
- `GET /api/tasks`
- `POST /api/tasks` with `{ "title": "Study React" }`
- `PUT /api/tasks/:id` with `{ "title": "Updated", "completed": true }`
- `DELETE /api/tasks/:id`

Auth API (`http://localhost:5002`):
- `POST /api/auth/register` with `{ "name": "Swarup", "email": "swarup@example.com", "password": "StrongPass123" }`
- `POST /api/auth/login` with `{ "email": "swarup@example.com", "password": "StrongPass123" }`
- `GET /api/auth/me` with `Authorization: Bearer TOKEN`

Notes API (`http://localhost:5003`), all routes require `Authorization: Bearer TOKEN`:
- `GET /api/notes`
- `POST /api/notes` with `{ "title": "React", "content": "Revise props and state" }`
- `PUT /api/notes/:id`
- `DELETE /api/notes/:id`

## Suggested testing
1. Start MongoDB.
2. Start `auth-api`, register and log in via Postman.
3. Copy the login token into the Postman Bearer Token field.
4. Use the token to test the Notes API.
5. Test To-Do CRUD endpoints.
6. Run the React app and test each page.

Never upload real `.env` files or real secrets to GitHub. Only upload `.env.example`.
