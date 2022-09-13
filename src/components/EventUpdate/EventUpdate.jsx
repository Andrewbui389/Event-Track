import { useState } from "react";
import sendRequest from "../../utilities/send-request";

export default function EventUpdate({eventId, setCurrentPage}){
    let [data , setData] = useState({eventTitle:''})

    function updateData(evt){
        let updateData = {...data, [evt.target.name]:evt.target.value}
        setData(updateData)
    }

    async function handleFormSubmission(evt){
        evt.preventDefault()
        await sendRequest(`/event/updateevent/${eventId}`, 'PUT', data)
        setCurrentPage(1)
        return
    }


    return( 
        <form className="form-con" onSubmit={handleFormSubmission}>
            <label name='eventTitle'>New Event Name</label>
            <input type='text' name='eventTitle' onChange={updateData} value={data.eventName} required></input>
            <div style={{display:'flex'}}>
                <button type="submit">Submit Update</button>
                <button onClick={() => setCurrentPage(1)}>Cancel</button> 
            </div>
        </form>
    );
}