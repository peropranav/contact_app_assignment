import Link from 'next/link'
const ContactList = ()=> {
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
  {
      arrayOfContacts.map((val,index)=>{
          return  <Link
          key={index}
          href={{
            pathname: '/contactDetail',
            query: val,
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
  </div>
}
const arrayOfContacts = [
    {
        first : "Pranav",
        last: "Kapoor",
        phone : "9910476755"
    },
    {
        first : "Meena",
        last: "Kapoor",
        phone : "9911478400"
    },
    {
        first : "Pankaj",
        last: "Kapoor",
        phone : "9717644365"
    },
    
]
export default ContactList