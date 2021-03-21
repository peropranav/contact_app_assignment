import Link from 'next/link'
import { useEffect, useState } from 'react'
import {getContactList,addContact}  from '../../services/contactService';
const ContactList = ()=> {
  const [arrayOfContacts,setarrayOfContacts] = useState([]);
  const [showAddContactInput,setshowAddContactInput] = useState(false);
  const showAddContactBox = ()=>{
    setshowAddContactInput(true);
  }
  const registerUser = async (event) => {
    event.preventDefault();
    let contactObj = {
      "first": event.target.first.value,
      "last": event.target.last.value,
      "phone": event.target.phone.value
    }
    const reponse = await addContact(contactObj);
    setshowAddContactInput(false);
    getContacts();
  }
  const getContacts = async () => {
    let response = await getContactList();
    if(response){
     setarrayOfContacts(response.data);
     console.log(arrayOfContacts);
    }
 }
  useEffect(()=>{
    getContacts();
  },[]);
    return <div className="container">
            <div className="row">
                <div className="col text-center">
        <h3>PHONE BOOK</h3>
        </div>
        </div>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Phone No.</th>
    </tr>
  </thead>
  <tbody>
  { arrayOfContacts &&
      arrayOfContacts.map((val,index)=>{
          return  <Link
          key={index}
          href={{
            pathname: '/contactDetail',
            query: {_id: val._id},
          }}
        >
          <tr>
          <th scope="row">{index+1}</th>
          <td>{val.first}</td>
          <td>{val.last}</td>
          <td>{val.phone}</td>
        </tr>
        </Link>
      })
  }
  </tbody>
</table>
<div className="row">
  <div className="col text-center">
      <button className="btn btn-primary" onClick={showAddContactBox}>Add Contact</button>
  </div>
</div>
<br/>
{ showAddContactInput && <div className="row">
  <div className="col text-center">
  <form onSubmit={registerUser}>
    <div className="row">
      <div className="col-md-2 col-4 offset-md-4">
      <label htmlFor="first">First :</label>
      </div>
      <div className="col-md-2 col-4">
      <input id="first" type="text" required />
      </div>
    </div>
    <div className="row">
      <div className="col-md-2 col-4 offset-md-4">
      <label htmlFor="last">Last :</label>
      </div>
      <div className="col-md-2 col-4">
      <input id="last" type="text" required />
      </div>
    </div>
    <div className="row">
      <div className="col-md-2 col-4 offset-md-4">
      <label htmlFor="phone">Phone :</label>
      </div>
      <div className="col-md-2 col-4">
      <input id="phone" type="text" required />
      </div>
    </div>
    <br/>
    <div className="row">
<div className="col">
<button type="submit" className="btn btn-success">Submit</button>

</div>
</div>
    </form>
  </div>
</div>}
  </div>
}
export default ContactList