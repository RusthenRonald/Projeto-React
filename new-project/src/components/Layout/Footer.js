import {FaFacebook,FaInstagram,FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'
function Footer(){
    return(
        <footer className={styles.footer}>
            <ul>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
                <p><span>Costs</span>&copy; 2025</p>
            </ul>
        </footer>
    )
} export default Footer