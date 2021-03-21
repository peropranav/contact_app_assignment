import { useRouter } from 'next/router'
import classes from "./contactDetail.module.css";
import Footer from "../../components/footer/index";
import classNames from "classnames";
import { useState } from 'react';
const ContactDetail = ()=> {
const [showSaveBtn, setshowSaveBtn] = useState(false);
    const router = useRouter()
    const data = router.query;
    const editContact = ()=> {
        setshowSaveBtn(true);
        }
    const saveEditedContact = () => {
        setshowSaveBtn(false);
    }
    return <>
                <Footer/>
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <div className= {classes.contactBox}>
            <div className="row">
                <div className="col text-center">
                    <img src="/contactIcon.png" className={classNames(classes.marginTop20,classes.contactImgStyle)}/>
                    <br/>
                    <h3>{data.first } {data.last}</h3>
                    </div>  
            </div>
       <div className="row">
           <div className="col text-center">
               <button className="btn btn-primary">
                   Message
               </button>
               &nbsp;
               {!showSaveBtn && <button className="btn btn-secondary" onClick={editContact}>
                   Edit Contact
               </button>}
                  {showSaveBtn && <button className="btn btn-secondary" onClick={saveEditedContact}>
                   Save Contact
               </button>}

           </div>
       </div>
            <div className = {classNames("row",classes.marginTop20)}>
                <div className="col text-center">
<h3>Phone : {data.phone}</h3>

                </div>
            </div>
                </div>
                </div>
            </div>
            </div>
    </>
}
export default ContactDetail;