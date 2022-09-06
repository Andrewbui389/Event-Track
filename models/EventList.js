const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const eventListSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    events:[{type:Schema.Types.ObjectId, ref: 'Event'}]
    },{
    timeStamps: true
    })


module.exports = mongoose.model('EventList', eventListSchema);