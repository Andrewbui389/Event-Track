import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import GuestsComponent from "../../components/GuestsComponent/GuestsComponent";
import QRReader from "../../components/QRReader/QRReader";
import sendRequest from "../../utilities/send-request";
import EventUpdate from "../../components/EventUpdate/EventUpdate";
import NewGuestForm from "../../components/NewGuestForm/NewGuestForm";
export default function EventDetailsPage({setLeftSideItems}){
    const [currentPage, setCurrentPage] = useState(1)
    const [userMessage, setUserMessage ] = useState(null)

    let navButtons = ['Check in a guest', 'Update Event Information', 'Add New Guest']
    let buttonCorelation = [2,3,4]
    let buttons = navButtons.map((x,idx) => {
        return <button onClick={() => setCurrentPage(buttonCorelation[idx])}>{x}</button>
    })

    async function checkIn(value){
        try {
            let data = value.split('/')
            let res = await sendRequest(`/updateguest/qrcode/${eventId}/${data[4]}`, 'PUT').then(res => {
            setCurrentPage(1)
            return res
            })
            setUserMessage(res.message)
            return
        } catch{
            return
        }
    }

    let { eventId } = useParams()

    useEffect(() => {
        setLeftSideItems(buttons)
    },[])

    return(
        <div className="rightSide">
            <>
            {
            currentPage === 1 ? 
            <GuestsComponent eventId={eventId} /> 
            :
            ''
            }
            {currentPage === buttonCorelation[0] ? <QRReader checkIn={checkIn} setCurrentPage={setCurrentPage} /> : ''}
            {currentPage === buttonCorelation[1] ? <EventUpdate eventId={eventId} setCurrentPage={setCurrentPage} /> : ''}
            {currentPage === buttonCorelation[2] ? <NewGuestForm eventId={eventId} setCurrentPage={setCurrentPage} /> : ''}
            {userMessage}
            </>
        </div>
    );
}