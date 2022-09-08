import { useState, useEffect, useRef } from "react"
import sendRequest from "../../utilities/send-request"

export default function GuestsComponent({eventId}){
    let [event,setEvent] = useState({})

    let guests = useRef([])
    
    useEffect(() => {
        async function retrieveEvent(){
            let res = await sendRequest(`/event/${eventId}`)
            guests.current = res.guestList
            setEvent(res)
        }
        retrieveEvent()
    },[eventId])
    let guestsArr = guests.current.map(guest => {
        return(
            <li>
                <h5>{guest.name}</h5>
                <p>Status: {guest.checkInStatus ? 'Checked In' : 'Have not checked in'}</p>
            </li>
        )
    })
    return(
    
    <div>
    <h1>Event Name: {event.eventTitle}</h1>
    <ul>
    {guestsArr}
    </ul>
    </div>
    )
}