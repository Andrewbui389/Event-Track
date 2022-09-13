import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import sendRequest from "../../utilities/send-request"

export default function GuestsComponent({eventId}){
    let [event,setEvent] = useState({})

    let guests = useRef([])
    let navigate = useNavigate()

    let guestsArr = guests.current.map((guest,idx) => {
        return(
        <li key={idx} className='displayItems'>
            <h5>{guest.name}</h5>
            <p>Status: {guest.checkInStatus ? 'Checked In' : 'Have not checked in'}</p>
            <button onClick={() => switchStatus(guest._id)}> {guest.checkInStatus ? 'Check Guest Out' : 'Check Guest In'}</button>
            <button onClick={() => deleteGuest(guest._id)}> Delete Guest </button>
        </li>
        )
    })


    async function deleteGuest(guestId){
        let res = await sendRequest(`/updateguest/remove/${eventId}/${guestId}`, 'DELETE')
        guests.current = res.guestList
        setEvent(res)
        return
    }

    async function switchStatus(guestId){
       let res = await sendRequest(`/updateguest/${eventId}/${guestId}`, 'PUT')
       guests.current = res.guestList
       setEvent(res)
       return
    }
    
    useEffect(() => {
        async function retrieveEvent(){
            let res = await sendRequest(`/event/${eventId}`)
            if(res.e === 'redirect'){
                navigate('/')
            }else {
                guests.current = res.guestList
                setEvent(res)
                return
            }
            
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