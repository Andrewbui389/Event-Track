import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
    },[])

    let loadData = events.map((x,idx) => {
        return (
        
        <tr key={idx}>
            <td className="eventTableCell"> <Link to={`/event/details/${x._id}`}>{x.eventTitle}</Link> </td>
            <td> <button onClick={() => deleteEvent(x._id)}>Delete</button> </td>
        </tr>
        
        )
    })
    return(
        <table>
        <tr>
            <th>
                Events
            </th>
        </tr>
            
            {
            loadData.length <= 0 
            ? 
            <li>No Events</li> 
            : 
            loadData 
            }
        </table>
            
    );
}