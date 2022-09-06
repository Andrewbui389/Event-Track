import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
    let loadData = events.map(x => {
        <li>{x}</li>
    })
    return(
    <div>
        <ul>
            {loadData.length <= 0 ? loadData: 'No Events' }
        </ul>
    </div>
    );
}