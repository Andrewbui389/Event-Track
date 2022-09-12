import { useEffect } from "react";
import { useParams } from "react-router-dom";
import GuestQRCode from "../../components/GuestQRCode/GuestQRCode";
import './GuestInvitePage.css'


export default function GuestInvitePage({changPageStat}){
    useEffect(() => {
        changPageStat(true)
    })
    
    const { eventId , guestId } = useParams()
    return(
    <div className="qrCode">
        <GuestQRCode url={`/updateguest/checkin/${eventId}/${guestId}`}/>
    </div>
    );
}