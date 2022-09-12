import { useState, useEffect, useRef } from "react"
import sendRequest from "../../utilities/send-request"

export default function GuestsComponent({eventId}){
    let [event,setEvent] = useState({})

    let guests = useRef([])

    let guestsArr = guests.current.map((guest,idx) => {
        return(
            <li key={idx}>
                <h5>{guest.name}</h5>
                <p>Status: {guest.checkInStatus ? 'Checked In' : 'Have not checked in'}</p>
                <button onClick={() => switchStatus(guest._id)}> {guest.checkInStatus ? 'Check Guest Out' : 'Check Guest In'}</button>
            </li>
        )
    })

    async function switchStatus(guestId){
       let res = await sendRequest(`/updateguest/${eventId}/${guestId}`, 'PUT')
       guests.current = res.guestList
       setEvent(res)
       return
    }
    
    useEffect(() => {
        async function retrieveEvent(){
            let res = await sendRequest(`/event/${eventId}`)
            guests.current = res.guestList
            setEvent(res)
            return
        }
        retrieveEvent()
    },[eventId])
    
    return(
    
    <div>
    <h1>Event Name: {event.eventTitle}</h1>
    <ul>
    {guestsArr}
    </ul>
    </div>
    )
}