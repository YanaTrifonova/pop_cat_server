# Pop cat sing a song

👉 [Go to Pop-Cat website](https://pop-cat.netlify.app/) 👈

## Repositories

Frontend repository - [link](https://github.com/YanaTrifonova/pop_cat)

Backend repository - current

## Stack

### Frontend

- JavaScript
- React
- Redux
- Axios
- React Bootstrap

### Backend

- Node.js
- Express.js
- JWT & BCrypt Authentication
- PostgreSQL
- Sequelize ORM

## Database architecture

![d](./media/readme/db_architecture.png?raw=true)

## Endpoints

| Method | Path                          | Purpose                                      | auth |
| ------ | ----------------------------- | -------------------------------------------- | ---- |
| GET    | '/'                           | Test if your server is running               | no   |
| POST   | '/echo'                       | Test POST requests                           | no   |
| POST   | '/signup'                     | Create a new user and get a token            | no   |
| POST   | '/login'                      | Get a token with email & password            | no   |
| GET    | '/me'                         | Get information of this user                 | yes  |
| GET    | '/cats'                       | Get all cats                                 | no   |
| GET    | '/instruments'                | Get all instruments                          | no   |
| GET    | '/songs'                      | Get all songs                                | no   |
| GET    | '/songs/me'                   | Get my songs                                 | yes  |
| GET    | '/favourites'                 | Get user's favourite songs                   | yes  |
| POST   | '/song'                       | Create a new song                            | yes  |
| PUT    | '/like/:userId/:postId'       | Increase like counter for the post           | yes  |
| PUT    | '/favourite/:userId/:postId'  | Increase fav counter for the post            | yes  |
| DELETE | '/like/:userId/:postId'       | Decrease like counter for the post           | yes  |
| DELETE | '/favourite/:userId/:postId'  | Decrease fav counter for the post            | yes  |
| PATCH  | '/song/:postId'               | Change name or/and description of your post  | yes  |
| DELETE | '/song/:postId'               | Delete your post                             | yes  |

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
