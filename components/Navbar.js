import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Navbar.module.css';
function Navbar() {
    return (
        <nav className={styles.nav}>
        <ul className={styles.navbarright}>
            <li className={styles.imageli}><Image className={styles.image} alt="logo-icon" src="/logo512.png" width="50" height="40" priority/></li>
            <li className={styles.list}><Link className={styles.button} href="/">Home</Link></li>
            <li className={styles.list}><Link className={styles.button}  href="/posts">Posts</Link></li>
            <li className={styles.list}><Link className={styles.button}  href="/contact">Contact</Link></li>
            <li className={styles.list}><Link className={styles.button}  href="/about">About</Link></li>
        </ul>
        {/* <ul  className="navbarleft">
          <li className="search-container"><input type="text" placeholder="Search.." name="search" value={search} onChange={(e)=> setSearch(e.target.value)} />
          <button type="submit"><i className="fa fa-search"></i></button></li>
          {!login ? 
          (<><li><Link className='button' to="/login">Login</Link></li>
          <li><Link className='button' to="/signup">SigUp</Link></li></>)
          :
          <li><Link className='button' onClick={()=> {
            setLogin(false);
            <Navigate to="/" replace={true} />
          }}>Logout</Link></li>
          }
        </ul> */}
        </nav>
    )
}
export default Navbar;