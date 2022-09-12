const EventList = require('../../models/EventList')
const User = require('../../models/user')
const Event = require('../../models/Event')

module.exports = {
    guestUpdate,
    qrCheckIn
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
        data.save()
        res.json(data)
    } catch (error) {  
    }
}

async function qrCheckIn(req,res){
    try {
        let data =  await Event.findOne({_id:req.params.eventId})
        let guests = data.guestList.id(req.params.guestId)
        if(!guests['checkInStatus']){
            guests['checkInStatus'] = true
            data.save()
            res.json({message:`Succesfully Checked In ${guests.name}` })
        } else {
            res.json({message:`${guests.name} has checked in already`})
        }
        
    } catch (error) {  
        
    }
}