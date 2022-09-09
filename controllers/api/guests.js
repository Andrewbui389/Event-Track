const EventList = require('../../models/EventList')
const User = require('../../models/user')
const Event = require('../../models/Event')

module.exports = {
    guestUpdate
}

async function guestUpdate(req,res){
    try {
        let data =  await Event.findOne({_id:req.params.eventId})
        let guests = data.guestList.id(req.params.guestId)
        if(guests['checkInStatus']){
            guests['checkInStatus'] = false
        }else {
            guests['checkInStatus'] = true
        }
        await data.save()
        res.json(data)
    } catch (error) {  
    }
}