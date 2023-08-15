// defines the structure of the user details
// defines the details field.

// schema is class and model is a function.
const {model, Schema} = require('../connection');

const mySchema = new Schema({
    name: String,
    email : String,
    password : String,
    avatar : String
});

module.exports = model('users', mySchema);