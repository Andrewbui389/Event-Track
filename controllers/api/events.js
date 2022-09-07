const EventList = require('../../models/EventList')
const Event = require('../../models/Event')
const User = require('../../models/user')
const accountSid =   process.env.TWILIO_ACCOUNT_SID             
const authToken = process.env.TWILIO_AUTH_TOKEN; 
const messagingServiceSid = process.env.MESSAGINGSERVICEID
const client = require('twilio')(accountSid, authToken); 
 

module.exports = {
    create
}

function sendText(name,event,phoneNumber){
    client.messages 
        .create({ 
         body: `Hi ${name}, this is you invitation to ${event} event click on the link when you arrive at the door google.com`,  
         messagingServiceSid: messagingServiceSid,      
         to: '1503-888-4816' 
        }) 
        .then(message => console.log(message.sid)) 
        .done();
}

async function create(req,res){
    let guestList = req.body.guestList
    let eventTitle = req.body.eventTitle
    let userEventList = await EventList.findOne({user:req.user._id})
    let data = {owner:req.user.name, eventTitle:eventTitle}
    let newEvent = await Event.create(data)
    guestList.forEach(guest => {
        newEvent.guestList.push(guest)
    })
    userEventList.events.push(newEvent._id)
    newEvent.save()
    userEventList.save()
    // userEventList.events.push(newEvent)
    try {
        guestList.forEach(guest => {
            sendText(guest.name,eventTitle)
        })
    } catch (error) {
        
    }
    
}