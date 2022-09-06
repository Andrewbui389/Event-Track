const EventList = require('../../models/EventList')
const User = require('../../models/user')

module.exports = {
    getData
}

async function getData(req,res){
    try {
        let data = await EventList.findOne({user:req.user._id})
        res.json(data)
    } catch (error) {
        
    }
    
}