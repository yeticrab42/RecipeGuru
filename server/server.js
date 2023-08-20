const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
// const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

const userController = require('./controllers/userController');
const favoritesController = require('./controllers/favoritesController');

mongoose.connect(
  'mongodb+srv://zetauser0:fakedelta!33@zetamath-cluster.zl4nai7.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(cookieParser());

app.post('/addUser', userController.addUser, (req, res) => {
  return res.status(200).send('created user');
});

app.post('/addFavorite', favoritesController.addFavorite, (req, res) => {
  console.log('post request to /addFavorite');
  return res.status(200).send('added to user1 favorite');
});

//404 ErrorHandler
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
