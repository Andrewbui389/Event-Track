import GuestQRCode from "../../components/GuestQRCode/GuestQRCode";
import { useState } from "react";

export default function GuestInvitePage({handleGuest}){
    handleGuest('show')
    return(
    <div>
        <GuestQRCode />
    </div>
    );
}