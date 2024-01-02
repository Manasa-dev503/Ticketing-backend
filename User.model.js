var mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL)

var userSchema = mongoose.Schema({
    username : String,
    password : String,
    role : String,
    fullname : String,
    id : Number
})

var User = mongoose.model('user',userSchema)

module.exports = User