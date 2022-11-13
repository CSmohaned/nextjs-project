import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Error.module.css';
function Error() {
  return (
    <div className={styles.nopage}>
    <Image alt='nopage' src='/monkey.png' width="186" height="174" priority/>
    <p>Sorry</p>
    <p>That page cannot be found</p>
  <Link className={styles.button} href="/">Back to the homepage...</Link>
</div>
  )
   
}
export default Error;