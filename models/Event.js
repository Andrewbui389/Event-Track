const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    phoneNumber: {
        type: String
    },
    checkInStatus: {
        type: Boolean,
        default: false
    },
    uniqueCode: {
        type: Number
    }
})


const eventSchema = new Schema({
    owner: {
        type:String, 
        required: true,
    },
    eventTitle:{
        type: String,
        required: true
    },
    guestList: [guestSchema]

})


module.exports = mongoose.model('Event', eventSchema);