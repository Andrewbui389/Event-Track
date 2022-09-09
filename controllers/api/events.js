const EventList = require('../../models/EventList')
const Event = require('../../models/Event')
const User = require('../../models/user')
const accountSid =   process.env.TWILIO_ACCOUNT_SID             
const authToken = process.env.TWILIO_AUTH_TOKEN; 
const messagingServiceSid = process.env.MESSAGINGSERVICEID
const client = require('twilio')(accountSid, authToken); 
 

module.exports = {
    create,
    deleteEvent,
    getEventData
}

function sendText(name,event,phoneNumber){
    client.messages 
        .create({ 
         body: `Hi ${name}, this is you invitation to ${event} event click on the link when you arrive at the door google.com`,  
         messagingServiceSid: messagingServiceSid,      
         to: '503-888-4816' 
        }) 
        .then(message => console.log(message.sid)) 
        .done();
}

async function deleteEvent(req,res){
    await EventList.updateOne({user:req.user._id},
        {$pullAll:{
            events: [{_id:req.params.id}]
        }

        })
    await Event.findByIdAndRemove(req.params.id)
    let data = await EventList.findOne({user:req.user._id}).populate('events').exec()
    res.json(data)
}

async function create(req,res){
    try {
        const [guestList,eventTitle]  = [req.body.guestList,req.body.eventTitle]
        const userEventList = await EventList.findOne({user:req.user._id})
        const data = {owner:req.user.name, eventTitle:eventTitle}
        const newEvent = await Event.create(data)
        guestList.forEach(guest => {
            newEvent.guestList.push(guest)
        })
        userEventList.events.push(newEvent._id)
        newEvent.save()
        userEventList.save()
        if(guestList.length >= 1){
            guestList.forEach(guest => {
                sendText(guest.name,eventTitle)
            })
        }
        
    } catch (error) {
        
    }
    
}

async function getEventData(req,res){
    let data = await Event.findById(req.params.id)
    res.json(data)
}



