
import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './NavBar.module.css'
import logo from '../../img/costs_logo.png'
function NavBar(){
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'>
                <img src={logo}></img></Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/' className={styles.item_a}>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/company'  className={styles.item_a}>Company</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/contact'  className={styles.item_a}>Contact</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/newproject'  className={styles.item_a}>NewProject</Link>
                    </li>
                </ul>
            </Container>
        </nav>

    )
} export default NavBar