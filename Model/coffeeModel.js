const mongoose = require('mongoose');

const coffeemodel = mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    size:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('coffee',coffeemodel)