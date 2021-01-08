# Pop cat sing a song

## Stack

### Frontend

- JavaScript
- React
- Redux
- Axios
- Material-UI

### Backend

- Node.js
- Express.js
- JWT & BCrypt Authentication
- PostgreSQL
- Sequelize ORM

## Database architecture

![d](./media/readme/db_architecture.png?raw=true)

## Endpoints

| Method | Path                       | Purpose                             | required parameters   | auth |
| ------ | -------------------------- | ----------------------------------- | --------------------- | ---- |
| GET    | '/'                        | Test if your server is running      | none                  | no   |
| POST   | '/echo'                    | Test POST requests                  | none                  | no   |
| POST   | '/signup'                  | Create a new user and get a token   | email, name, password | no   |
| POST   | '/login'                   | Get a token with email & password   | email, password       | no   |
| GET    | '/me'                      | Get information of this user        | none                  | yes  |
| POST   | '/authorized_post_request' | Test POST requests (token required) | none                  | yes  |

## Run in development mode

Server starts on PORT=4000

1. start server

```
npm run start
```

2. start server with `nodemon` in development mode

```
npm run dev
```

3. start server with delay on response

```
npm run devdelay
```