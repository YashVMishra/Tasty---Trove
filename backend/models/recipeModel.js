// defines the structure of the user details
// defines the details field.

// schema is class and model is a function.
const {model, Schema} = require('../connection');

const mySchema = new Schema({
    title: String,
    category : String,
    ingredients : String,
    method : String,
    image : String
});

module.exports = model('recipe', mySchema);