var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const profileMaster = new Schema({
    HeaderDescription: String,
    ParagraphDescription: String,
    IsListProfile: Boolean,
    Active: Boolean,
    profiles: [{
        text: String
    }]
})

module.exports = mongoose.model('ProfileModel', profileMaster);