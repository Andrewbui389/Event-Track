import GuestQRCode from "../../components/GuestQRCode/GuestQRCode";
import Test from "../../components/QRReader/QRReader";
import './GuestInvitePage.css'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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