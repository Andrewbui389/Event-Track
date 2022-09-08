import GuestsComponent from "../../components/GuestsComponent/GuestsComponent";
import { useParams } from "react-router-dom";
export default function EventDetailsPage(){
    let { eventId } = useParams()
    return(
        <main>
          <GuestsComponent eventId={eventId}/>
        </main>
    );
}