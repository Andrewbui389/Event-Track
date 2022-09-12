import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import GuestsComponent from "../../components/GuestsComponent/GuestsComponent";
import Test from "../../components/QRReader/QRReader";
import sendRequest from "../../utilities/send-request";
import EventUpdate from "../../components/EventUpdate/EventUpdate";
export default function EventDetailsPage({setLeftSideItems}){
    const [showCheckIn, setCheckIn] = useState(false)
    const [showPageUpdateForm , setShowPageUpdateForm] = useState(false)
    const [userMessage, setUserMessage ] = useState(null)

    function handleUpdateForm(value){
        setShowPageUpdateForm(value)
    }

    
    function handleqr(value){
        setCheckIn(value)
    }

    async function test(value){
        try {
            let data = value.split('/')
            setCheckIn(false)
            let res = await sendRequest(`/updateguest/qrcode/${data[3]}/${data[4]}`, 'PUT')    
            setUserMessage(res.message)
        } catch{
        }
        
    }

    let { eventId } = useParams()

    useEffect(() => {
        setLeftSideItems([<button onClick={() => handleqr(true)}>Check in a guest</button>, <button onClick={() => handleUpdateForm(true)}>Update Event Information</button>,<button onClick={() => handleUpdateForm(true)}>Add New Guest</button>])
    },[setLeftSideItems])

    return(
        <div className="rightSide">
            {showCheckIn ? 
            <Test test={test} handleqr={handleqr}/> 
            : 
            ''
            }
            {!showCheckIn &&  !showPageUpdateForm 
            ? 
            <>
            <GuestsComponent eventId={eventId} />
            </>
            :
            ''
            }
            {showPageUpdateForm && showCheckIn === false? 
            <EventUpdate handleUpdateForm={handleUpdateForm}/> 
            :
            ''
            }
            {userMessage}
        </div>
    );
}