import classes from './footer.module.css';
import Link from 'next/link';
const Footer = ()=> {

    return <div className="container">
<div className="row">
  <div className="col text-center">
    <Link href="/contactApp">
  <div className={classes.headerStyle}>
    <h1>Contact List</h1>
    </div>
    </Link>
  </div>
  <div className= "col text-center">
  <div className={classes.headerStyle}>
  <Link href="/messages">
  <h1>Messages</h1>
  </Link>
    </div>
  </div>
</div>
    </div>
}
export default Footer