var mongoose = require('mongoose')
 
mongoose.connect(process.env.DB_URL)

var ticketSchema = mongoose.Schema({
    issue:String,
    productname:String,
    id:Number,
    employeeId:String,
    customerId:String

})

var Ticket = mongoose.model('ticket',ticketSchema)

module.exports = Ticket
