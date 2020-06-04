// Required mongoose library for comunicating with database.
// For this first we need to install mongoose. For installing mongoose module run npm command.
// Command is - 'npm install mongoose'.
const mongoose = require('mongoose');

// Making mongoose Promis to a globle Promis.
mongoose.Promise = global.Promise;

// Connecting to the MongooDb with mongoose object. Url is combination of server address followed by the name of database name.
// Example http://localhost:3000/ + meanCrud (Database name)
// And second arguments is an object of connection options
mongoose.connect('mongodb://127.0.0.1:27017/meanCrud', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useFindAndModify: true })
    .then(() => console.log('Express connected to MongoDB')) // After successful connection.
    .catch((error) => console.log(error)); // Catching and loging in console if error arives.

// This file is mongoose module so we need to export this module for external use in app.js and that is possible with below statment.
module.exports = mongoose;