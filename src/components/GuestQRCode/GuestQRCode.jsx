import QRCode from "react-qr-code";

export default function GuestQRCode({url}){
    return(
        <QRCode value={url} />
    );
}