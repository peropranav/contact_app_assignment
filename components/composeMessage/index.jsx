import { useState } from "react";
import { sendMessageToContact } from "../../services/contactService";

const ComposeMessage = (props)=> {
    const [message , setMessage] = useState('');
 const onTextAreaChange = (value)=> {
    setMessage(value);
 }   
const sendMessage = async () => {
let messageObj = {
    id: props.id,
    first:props.first,
    phone: props.phone,
    text: message
}
let messageResponse = await sendMessageToContact(messageObj);
if(messageResponse){
    setMessage('');
    alert('messsage sent');
}
}
    return <>
    <div className="col text-center">
    <h6 className="input-group-text">Compose Message</h6> <br/>
    </div>
    <div className="col text-center">
    <textarea className="form-control" aria-label="With textarea" value = {message} onChange={e=>onTextAreaChange(e.target.value)}></textarea>
    </div>
    <br/>
    <div className="col text-center">
    <button className="btn btn-primary" onClick={sendMessage}>Send Message</button>
    </div>
    </>
}
export default ComposeMessage;
