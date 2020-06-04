// Importing a express mdoule
const express = require('express');
// Creating a object of app
const app = express();
// Port for server
const port = 3000;

// Importing a mongoose module in app.js module for connecting with MongoDB.
const mongoose = require('./database/mongoose');

// Importing a model to further use.
const User = require('./database/models/user');

// Enabling a json parser to exchanging a data with server.
app.use(express.json());

// Enabling CORS for sharign resourses for other domain.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS, PATCH, HEAD');
    res.header('Access-Control-Allow-Headers', 'Origin, X-requested-with, Content-Type, Accept');
    next();
});

// Creating a route's for api use.
// Base route.
app.get('/', (req, res) => res.send('<center><h1>Backend API is ruuning !</h1></center>')); // Returning a Backend API is ruuning ! string.

// Get all Users route.
app.get('/api/getUsers', (req, res) => {
    User.find({})
        .then((users) => res.send({ "status": "success", "data": users }))
        .catch((error) => console.log(error));
});

// Add User route.
app.post('/api/addUser', (req, res) => {
    (new User({ "first_name": req.body.first_name, "last_name": req.body.last_name, "county_code": req.body.county_code, "phone": req.body.phone, "email": req.body.email, "gender": req.body.gender, "avatar": req.body.avatar, "identity_proof": req.body.identity_proof }))
        .save()
        .then((result) => res.send({ "status": "success", "data": result }))
        .catch((error) => console.log(error));
});

// Get User route.
app.get('/api/getUser/:id', (req, res) => {
    User.find({ "_id": req.params.id })
        .then((user) => res.send({ "status": "success", "data": user }))
        .catch((error) => console.log(error));
});

// Update User route.
app.patch('/api/updateUser/:id', (req, res) => {
    User.findOneAndUpdate({ "_id": req.params.id }, { $set: req.body })
        .then((user) => res.send({ "status": "success", "data": user }))
        .catch((error) => console.log(error));
});

// Delete User rotue.
app.delete('/api/deleteUser/:id', (req, res) => {
    User.findByIdAndDelete({ "_id": req.params.id })
        .then((user) => res.send({ "status": "success", "data": user }))
        .catch((error) => console.log(error));
});

// Listening a server on listed address.
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));