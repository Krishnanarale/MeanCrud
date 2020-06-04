// Importing a mongoose module to this model to connect to databse.
const mongoose = require('mongoose');

// User schema defination for string data. 
const UserSchema = new mongoose.Schema({
    'title': {
        type: String,
        trim: true
    },
    'first_name': {
        type: String,
        trim: true
    },
    'last_name': {
        type: String,
        trim: true
    },
    'county_code': {
        type: String,
        trim: true
    },
    'phone': {
        type: String,
        trim: true
    },
    'email': {
        type: String,
        trim: true
    },
    'gender': {
        type: String,
        trim: true
    },
    'avatar': {
        type: String,
        trim: true
    },
    'identity_proof': {
        type: Boolean,
        default: false
    },
    'created_at': {
        type: Date,
        default: Date.now
    }
});

// Asigning schema to User mongoose model.
const User = mongoose.model('User', UserSchema);

// Exporting a module to external use of this schema.
module.exports = User;