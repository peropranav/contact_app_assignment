import Link from 'next/link';
import { useEffect, useState } from 'react';
import Footer from '../../components/footer/index';
import { getMessages } from '../../services/contactService';
const Messages = () => {
const [messageArr, setmessageArr] = useState([]);

useEffect(()=>{
    getMessages()
    .then(response=>{
        console.log(response.data);
        setmessageArr(response.data);
    })
},[]);
   return <>
   <Footer/>
   <div className="container">
   <div className="row">
                <div className="col text-center">
        <h3>MESSAGE BOOK</h3>
        </div>
        </div>
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Time</th>
        <th scope="col">First</th>
        <th scope="col">Phone No.</th>
        <th scope="col">Text</th>
      </tr>
    </thead>
<tbody>
{ messageArr &&
      messageArr.map((val,index)=>{
          return <Link
          key={index}
          href={{
            pathname: '/contactDetail',
            query: {_id: val.messageReceiverId},
          }}
        >
          <tr key = {index}>
          <td>{val?.date?.substring(5,10)}</td>
          <td>{val?.first}</td>
          <td>{val?.phone}</td>
          <td>{val?.text}</td>
        </tr>
        </Link>
      })
  }
</tbody>
    </table>
    </div>
    </>
}
export default Messages;