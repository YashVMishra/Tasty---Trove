const mongoose = require('mongoose');

const url = 'mongodb+srv://yashvardhanmishra01:root@cluster0.xciw0xw.mongodb.net/personalchef?retryWrites=true&w=majority';

// asynchronous function - returns a promise
mongoose.connect(url)
.then((result) => {
    // console.log(result);
    console.log('connected to mongodb');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;