import {FaGithub,FaInstagram,FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'
function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><a href=""><FaGithub /></a></li>
                <li><a href="https://www.instagram.com/___rusthenronald/"><FaInstagram/></a></li>
                <li><a href="https://www.linkedin.com/in/rusthen-ronald-631ba6300/" target='blank'><FaLinkedin/></a></li>
            </ul>
            <p className={styles.copy_right}><span>Costs</span>&copy; 2025</p>
        </footer>
    )
} export default Footer