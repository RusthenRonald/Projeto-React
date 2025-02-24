import styles from './NavBar.module.css'
import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/Empresa'>
          <li>Empresa</li>
        </Link>
        <Link to='Contato'>
          <li>Contato</li>
        </Link>
      </ul>
    )
} export default Navbar