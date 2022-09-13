import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from 'xlsx'
import sendRequest from "../../utilities/send-request";


export default function NewEventForm(){
    let navigate = useNavigate()

    let [dataToSend, setData] = useState({
        eventTitle: '',
        guestList: []
    })

    let [buttonState , setButton] = useState(false)

    async function handleSubmit(evt){
        evt.preventDefault()
        await sendRequest('/event', 'POST', dataToSend) 
        return
    }

    let handleButton = () => { 

        setTimeout(() => {
            setButton(true)
        },500)

        setTimeout(() => {
            navigate('/')
        },1000)
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
    return(
        <form autoComplete="off" onSubmit={handleSubmit} className="form-con">
            <div className="formItems">
                <div className="form-label">
                    <label name='eventTitle'>Event Name</label>
                    <label name='guestList'>Event Guest Template</label>
                </div>
                <div className="form-group">
                    <input type='text' name='eventTitle' placeholder="Event Name" onChange={handleNameChange} value={dataToSend.eventTitle} required></input>
                    <input id='userFile' type='file' name='guestList' onChange={onChange}></input>
                </div>
            </div>
            
            <button type="submit" className="sub" disabled={buttonState} onClick={handleButton}>Submit</button>
        </form>
    );
}