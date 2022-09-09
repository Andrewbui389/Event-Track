import GuestQRCode from "../../components/GuestQRCode/GuestQRCode";
import Test from "../../components/QRReader/QRReader";
import { useState, useEffect } from "react";

export default function GuestInvitePage({changPageStat}){
    useEffect(() => {
        changPageStat(true)
    })
    
    return(
    <div>
        <GuestQRCode />
    </div>
    );
}