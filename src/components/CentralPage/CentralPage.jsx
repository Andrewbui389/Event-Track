import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import * as eventsList from '../../utilities/eventsList-service'

export default function CentralPage({user}){
    let [events, setEvents] = useState([])
    useEffect(function() {
        async function loadEvents(){
            let data = await eventsList.grabList()
            setEvents(data.events)
        }
        loadEvents()
    }, [])
    let loadData = events.map((x,idx) => {
        return <li key={idx}>{x.eventTitle}</li>
    })
    return(
    <div className=''>
        <ul>
            {
            loadData.length <= 0 ? 
            
                <li>No Events</li> 
            
             : 
             loadData 
            }
            <Link to='newevent'>Add New Event</Link>
        </ul>
    </div>
    );
}