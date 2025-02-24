import styles from './NavBar.module.css'
import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <ul className={styles.list}>
        <Link to='/'>
          <li className={styles.item}>Home</li>
        </Link>
        <Link to='/Empresa'>
          <li className={styles.item}>Empresa</li>
        </Link>
        <Link to='Contato'>
          <li className={styles.item}>Contato</li>
        </Link>
      </ul>
    )
} export default Navbar