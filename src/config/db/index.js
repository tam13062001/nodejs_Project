const mongoose = require('mongoose');

async function connect(){

    try {
        await mongoose.connect('mongodb://localhost:27017/node_js_practice');

    } catch (error) {

    }
}

module.exports = {connect};