var mongoose = require('mongoose')
var adminUserSchema = new mongoose.Schema({
    "adminEmail": String,
    "adminPassword": String,
})
module.exports = mongoose.model('AdminUser', adminUserSchema);