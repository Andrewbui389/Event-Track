import { useState, useEffect } from "react"
import sendRequest from "../../utilities/send-request"

export default function GuestsComponent({eventId}){
    let [event,setEvent] = useState({})
    
    useEffect(() => {
        async function retrieveEvent(){
            let res = await sendRequest(`/event/${eventId}`)
            console.log(res)
            setEvent(res)
        }
        retrieveEvent()
    },[eventId])
    // let guests = event.guestList.map(guest => {
    //     return(
    //         <li>
    //             <h5>{guest.name}</h5>
    //         </li>
    //     )
    // })
    return(
    
    <div>
    <h1>Event Name: {event.eventTitle}</h1>
    <ul>
    </ul>
    </div>
    )
}