import GuestsComponent from "../../components/GuestsComponent/GuestsComponent";
import Test from "../../components/QRReader/QRReader";
import sendRequest from "../../utilities/send-request";
import { useParams } from "react-router-dom";
import { useState } from "react";
export default function EventDetailsPage(){
    const [showCheckIn, setCheckIn] = useState(false)
    function handleqr(value){
        setCheckIn(value)
    }

    async function test(value){
        let data = value.split('/')
        await sendRequest(`/updateguest/${data[3]}/${data[4]}`, 'PUT')
        setCheckIn(false)
    }

    let { eventId } = useParams()

    return(
        <div>
          {showCheckIn ? 
          <Test test={test}/> 
          : 
          <>
            <GuestsComponent eventId={eventId} test={test}/>
            <button onClick={() => handleqr(true)}>Check in a guest</button>
          </>
          }
        </div>
    );
}