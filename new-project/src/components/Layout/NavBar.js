
import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './NavBar.module.css'
import logo from '../../img/costs_logo.png'
function NavBar(){
    return(
        <Container>  
            <Link to='/'>
            <img src={logo}></img></Link>
            <ul className={styles.navbar}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/company'>Company</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/newproject'>NewProject</Link>
                </li>
            </ul>
        </Container>

    )
} export default NavBar