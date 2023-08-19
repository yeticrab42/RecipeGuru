const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const React = require('react');

// const PORT = 3000;

// const app = express();

// const mongoURI =

// mongoose.connect(mongoURI);

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(cookieParser());

//404 ErrorHandler
// app.use('*', (req,res) => {
//     res.status(404).send('Not Found');
// });

// Global error handler
// app.use((err, req, res, next) => {
//     const defaultErr = {
//         log: 'Express error handler caught unknown middleware error',
//         status: 400,
//         message: { err: 'An error occurred'};
//     };
//     const errObj = Object.assign({}, defaultErr, err);
//     console.log(errObj.log);
//     return res.status(errObj.status).json(errObj.message);
// });

// app.listen(PORT, () => console.log(`listening on port ${PORT}`));
