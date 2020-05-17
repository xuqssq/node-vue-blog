var mongoose = require('mongoose')
var skillSchema = new mongoose.Schema({
    "skillName": String,
    "skillMasteryLevel": Number,
    "skillColor": String,
})

module.exports = mongoose.model('Skill', skillSchema);