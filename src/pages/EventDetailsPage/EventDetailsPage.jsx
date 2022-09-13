import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import GuestsComponent from "../../components/GuestsComponent/GuestsComponent";
import QRReader from "../../components/QRReader/QRReader";
import sendRequest from "../../utilities/send-request";
import EventUpdate from "../../components/EventUpdate/EventUpdate";
export default function EventDetailsPage({setLeftSideItems}){
    const [currentPage, setCurrentPage] = useState(1)
    const [userMessage, setUserMessage ] = useState(null)

    async function checkIn(value){
        try {
            let data = value.split('/')
            let res = await sendRequest(`/updateguest/qrcode/${eventId}/${data[4]}`, 'PUT').then(res => {
            currentPage(1)
            return res
            })
            setUserMessage(res.message)
            return
            
           
        } catch{
        }
        
    }

    let { eventId } = useParams()

    useEffect(() => {
        setLeftSideItems([<button onClick={() => setCurrentPage(2)}>Check in a guest</button>, <button onClick={() => setCurrentPage(3)}>Update Event Information</button>,<button >Add New Guest</button>])
    },[setLeftSideItems])

    return(
        <div className="rightSide">
            <>
            {
            currentPage === 1 ? 
            <GuestsComponent eventId={eventId} /> 
            :
            ''
            }
            {currentPage === 2 ? <QRReader checkIn={checkIn}  setCurrentPage={setCurrentPage} /> : ''}
            {currentPage === 3 ? <EventUpdate eventId={eventId} setCurrentPage={setCurrentPage} /> : ''}
            {userMessage}
            </>
        </div>
    );
}