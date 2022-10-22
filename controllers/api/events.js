const EventList = require('../../models/EventList')
const Event = require('../../models/Event')
const accountSid =   process.env.TWILIO_ACCOUNT_SID             
const authToken = process.env.TWILIO_AUTH_TOKEN; 
const messagingServiceSid = process.env.MESSAGINGSERVICEID
const client = require('twilio')(accountSid, authToken); 
 

module.exports = {
    create,
    deleteEvent,
    getEventData,
    updateTitle
}

function sendText(name,event,eventId,guestId){
    client.messages 
        .create({ 
         body: `Hi ${name}, this is you invitation to ${event} event click on the link when you arrive at the door https://event-track.herokuapp.com/guestpass/${eventId}/${guestId}`,  
         messagingServiceSid: messagingServiceSid,      
         to: '5038884816'
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
        newEvent.guestList.forEach(guest => {
            sendText(guest.name, eventTitle, newEvent._id, guest._id)
        })
        userEventList.events.push(newEvent._id)
        newEvent.save()
        userEventList.save()        
        
    } catch (error) {
        res.status(404).json({err:'Error With Backend'})
    }
    
}

async function getEventData(req,res){
    try {
        let data = await Event.findById(req.params.id)
        if(data.owner !== req.user.name){
            throw new Error('redirect')
        }else{
            res.json(data)
        }
    } catch (error) {
        res.json({e:'redirect'})
    }
    
}

async function updateTitle(req,res){
    let data = await Event.findById(req.params.id)
    data.eventTitle = req.body.eventTitle
    data.save()
    res.json({})
}



