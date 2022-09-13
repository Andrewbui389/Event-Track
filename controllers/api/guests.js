const Event = require('../../models/Event')

module.exports = {
    guestUpdate,
    qrCheckIn,
    delete : deleteGuest
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
        if(!guests){
            res.json({message:`Guest is not on the list` })
        }
        else if(!guests['checkInStatus']){
            guests['checkInStatus'] = true
            data.save()
            res.json({message:`Succesfully Checked In ${guests.name}` })
        } else {
            res.json({message:`${guests.name} has checked in already`})
        }
    } catch (error) {  
        
    }
}

async function deleteGuest(req,res){
    try {
        let event = await Event.findById(req.params.eventId)
        let guest = event.guestList.id(req.params.guestId)
        guest.remove()
        event.save()
        res.json(event)
    } catch {
        res.status(400)
    }
    
}