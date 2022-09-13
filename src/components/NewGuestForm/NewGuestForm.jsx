import { useState } from "react";
import sendRequest from "../../utilities/send-request";

export default function NewGuestForm({eventId, setCurrentPage}){
    let [data , setData] = useState({name:'', phoneNumber:''})

    function updateData(evt){
        let updateData = {...data, [evt.target.name]:evt.target.value}
        console.log(data)
        setData(updateData)
    }

    async function handleFormSubmission(evt){
        
    }


    return( 
        <form className="form-con" onSubmit={handleFormSubmission}>
            <label name='name'>Guest Name</label>
            <input type='text' name='name' onChange={updateData} value={data.eventName} required></input>
            <label name='phoneNumber'>Guest Phone Number</label>
            <input type='text' name='phoneNumber' onChange={updateData} value={data.phoneNumber} required></input>
            <div style={{display:'flex'}}>
                <button type="submit">Submit Update</button>
                <button onClick={() => setCurrentPage(1)}>Cancel</button> 
            </div>
        </form>
    );
}