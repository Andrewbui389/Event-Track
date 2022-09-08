import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import sendRequest from "../../utilities/send-request";
import * as eventsList from '../../utilities/eventsList-service'

export default function CentralPage({user}){

    let [events, setEvents] = useState([])

    async function loadEvents(){
        let data = await eventsList.grabList()
        setEvents(data.events)
    }

    async function deleteEvent(eventId){
        let res = await sendRequest(`/event/${eventId}`, 'DELETE')
        setEvents(res.events)
    }

    useEffect(function() {
        loadEvents()
    }, [])

    let loadData = events.map((x,idx) => {
        return (
        
        <li key={idx}>
        <Link to={`/event/details/${x._id}`}>{x.eventTitle}</Link>
        <button onClick={() => deleteEvent(x._id)}>Delete</button>
        </li>
        
        )
    })
    return(
    <div className=''>
        <ul>
            {
            loadData.length <= 0 
            ? 
            <li>No Events</li> 
            : 
             loadData 
            }
            <Link to='newevent'>Add New Event</Link>
        </ul>
    </div>
    );
}