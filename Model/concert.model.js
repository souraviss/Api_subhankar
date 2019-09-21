var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const profileMaster = new Schema({
    ImageDescription: String,
    ImageUrl: String,
    Active: Boolean
})

module.exports = mongoose.model('Corcerts', profileMaster);