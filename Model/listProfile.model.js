var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const listProfiles = new Schema({
    Description: String
})

module.exports = mongoose.model('listProfile', listProfiles);