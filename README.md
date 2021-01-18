# Pop cat sing a song

Frontend repository - [link](https://github.com/YanaTrifonova/pop_cat)

Backend repository - current

## Stack

### Frontend

- JavaScript
- React
- Redux
- Axios
- Bootstrap

### Backend

- Node.js
- Express.js
- JWT & BCrypt Authentication
- PostgreSQL
- Sequelize ORM

## Database architecture

![d](./media/readme/db_architecture.png?raw=true)

## Endpoints

| Method | Path                          | Purpose                                      | required parameters                          | auth |
| ------ | ----------------------------- | -------------------------------------------- | -------------------------------------------- | ---- |
| GET    | '/'                           | Test if your server is running               | none                                         | no   |
| POST   | '/echo'                       | Test POST requests                           | none                                         | no   |
| POST   | '/signup'                     | Create a new user and get a token            | email, name, password                        | no   |
| POST   | '/login'                      | Get a token with email & password            | email, password                              | no   |
| GET    | '/me'                         | Get information of this user                 | none                                         | yes  |
| GET    | '/cats'                       | Get all cats                                 | none                                         | no   |
| GET    | '/instruments'                | Get all instruments                          | none                                         | no   |
| GET    | '/songs'                      | Get all songs                                | none                                         | no   |
| GET    | '/songs/:userId'              | Get my songs                                 | none                                         | yes  |
| GET    | '/favourites/:userId'         | Get user's favourite songs                   | none                                         | yes  |
| POST   | '/song'                       | Create a new song                            | name, description, catId, instrumentId, song | yes  |
| PUT    | '/like/:userID/:postId'       | Increase/decrease like counter for the post  | none                                         | yes  |
| PUT    | '/favourites/:userID/:postId' | Increase/decrease fav counter for the post   | none                                         | yes  |
| DELETE | '/like/:userID/:postId'       | Decrease like counter for the post           | none                                         | yes  |
| DELETE | '/favourites/:userID/:postId' | Decrease fav counter for the post            | none                                         | yes  |
| PATCH  | '/song/:postId'               | Change name or/and description of your post  | none                                         | yes  |
| DELETE | '/song/:postId'               | Delete your post                             | none                                         | yes  |

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