import './GuestInvitePage.css'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import GuestQRCode from '../../components/GuestQRCode/GuestQRCode';

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