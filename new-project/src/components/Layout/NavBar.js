
import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './NavBar.module.css'
import logo from '../../img/costs_logo.png'
function NavBar(){
    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='/company'>Company</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/newproject'>NewProject</Link>
        </div>

    )
} export default NavBar