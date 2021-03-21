import { useRouter } from 'next/router'
import classes from "./contactDetail.module.css";
import Footer from "../../components/footer/index";
import classNames from "classnames";
import { useEffect, useState } from 'react';
import {getContactById, updateContact} from '../../services/contactService';
import ComposeMessage from '../../components/composeMessage';
const ContactDetail = ()=> {
const [showSaveBtn, setshowSaveBtn] = useState(false);
const  [first, setFirst] = useState('');
const [last, setLast] = useState('');
const [phone , setPhone] = useState('');
const [showCompose, setshowCompose] = useState(false);
const router = useRouter()
const data = router.query;

const onMessageBtnClick = () => {
    setshowCompose(true);
}
const onFirstChange = (value) => {
setFirst(value);
}
const onLastChange = (value) => {
    setLast(value);
}
const onPhoneChange = (value) => {
    setPhone(value);
}

useEffect(()=>{
    if(data?._id) {
getContactById(data._id)
.then(response=>{
    setFirst(response?.data?.first);
    setLast(response?.data?.last);
    setPhone(response?.data?.phone);
}).catch(err=>{
    throw err;
})
}
},[data]);

const editContact = ()=> {
        setshowSaveBtn(true);
        }
    const saveEditedContact = async (event) => {
        event.preventDefault();
        let contactObj = {
            "first": first,
            "last": last,
            "phone": phone,
            "id": data._id
          }
          await updateContact(contactObj);        
          setshowSaveBtn(false);
    }
    return <>
                <Footer/>
        <div className="container">
            <form onSubmit = {saveEditedContact}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <div className= {classes.contactBox}>
            <div className="row">
                <div className="col text-center">
                    <img src="/contactIcon.png" className={classNames(classes.marginTop20,classes.contactImgStyle)}/>
                    <br/><br/>
                    <div className="row">
                        <div className="col-5 col-md-5">
                             <h6>First Name</h6>
                             </div>
                             <div className="col-5 col-md-5">
                             <h6>Last Name</h6>
                             </div>
                    </div>
                    <div className="row">
                    <div className="col-5 col-md-5 text-center offset-1">
                             <input className={classes.width95} id="first" type="text" required value={first}  disabled = {!showSaveBtn} 
                                 onChange={e => onFirstChange(e.target.value)}
                             />
                        </div> 
                             <div className="col-5 col-md-5">
                             <input className={classes.width95} id="last" type="text" required value={last}  disabled = {!showSaveBtn}
                             onChange={e => onLastChange(e.target.value)}
                             />
                             </div>
                    </div>
                    </div>  
            </div>
            <br/>
       <div className="row">
           <div className="col text-center">
               <button className="btn btn-primary"
               onClick = {onMessageBtnClick}
               >
                   Message
               </button>
               &nbsp;
               {!showSaveBtn && <button className="btn btn-secondary" onClick={editContact}>
                   Edit Contact
               </button>}
                  {showSaveBtn && <button className="btn btn-secondary" type="submit">
                   Save Contact
               </button>}

           </div>
       </div>
            <div className = {classNames("row",classes.marginTop20)}>
                <div className="col text-center">
<h3>Phone: &nbsp;
    <input type="text" value={phone} disabled = {!showSaveBtn}
    onChange={e => onPhoneChange(e.target.value)}
    />
  </h3>

                </div>
            </div>
                </div>
                </div>
            </div>
            </form>

            <div className="row" className={classes.marginTop20}>
               { showCompose && <ComposeMessage phone = {phone} id = {data._id}  first = {first}/>}
            </div>
            </div>
    </>
}
export default ContactDetail;