const { Schema, model } = require('mongoose');

const MovieSchema = new Schema({
    name: { type: String, required:true },
    category: {type:String, required:true},
    price:{ type:String, required:true},
    created_since: { type: Date, default: Date.now }
});

module.exports = model('Movie', MovieSchema);