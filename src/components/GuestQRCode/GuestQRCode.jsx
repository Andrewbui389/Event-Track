import QRCode from "react-qr-code";

export default function GuestQRCode({guestId}){
    return(
    <QRCode value={guestId} />
    );
}