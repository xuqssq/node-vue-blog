var mongoose = require('mongoose')
var timeLineSchema = new mongoose.Schema({
    "TimeLineInt": String,
    "TimeLineTime": String
})

module.exports = mongoose.model('TiemLine', timeLineSchema);