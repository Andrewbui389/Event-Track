import { useState } from "react";
import {read , utils} from 'xlsx'
import * as XLSX from 'xlsx'
import sendRequest from "../../utilities/send-request";


export default function NewEventForm(){
    let [dataToSend, setData] = useState({
        eventTitle: '',
        guestList: []
    })
    async function handleSubmit(evt){
        evt.preventDefault()
        let res = await sendRequest('/newevent', 'POST', dataToSend) 
        return 
    }

    function handleNameChange(evt){
        evt.preventDefault()
        let newData = {...dataToSend, [evt.target.name]:evt.target.value}
        setData(newData)
    }
    const onChange = (e) => {
        const [file] = e.target.files;
        const reader = new FileReader();
    
        reader.onload = (evt) => {
          const bstr = evt.target.result;
          const wb = XLSX.read(bstr, { type: "binary" });
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
          let convertData = data.splice(1,).map((set,idx) => { 
                return {name: set[0], phoneNumber:set[1]}
          })
          let newData = {...dataToSend, [e.target.name]:convertData}
          setData(newData)
        };
        reader.readAsBinaryString(file);
      };
      console.log(dataToSend)
    
    return(
        <div className="form-con">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Event Name</label>
                <input type='text' name='eventTitle' placeholder="Event Name" onChange={handleNameChange}></input>
                <input type='file' name='guestList' onChange={onChange}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
       
    );
}