import styles from './Home.module.css'
import { useState } from 'react'

function Contact(){
    const [isHovered, setIsHovered] = useState(false)

    const handleEmailClick = (e) => {
        e.preventDefault()
        window.location.href = 'mailto:rusthenronald9@gmail.com'
    }

    const emailStyle = {
        backgroundColor: isHovered ? '#ffbb33' : '#222',
        color: isHovered ? '#222' : '#ffbb33',
        padding: '0.8em 1.5em',
        textDecoration: 'none',
        fontSize: '1.1em',
        borderRadius: '5px',
        display: 'inline-block',
        marginTop: '1em',
        transition: '0.3s ease',
        cursor: 'pointer',
        border: 'none'
    }

    return(
        <div className={styles.home_container}>
            <h1>Contact</h1>
            <p>Get in touch with us</p>
            <button
                onClick={handleEmailClick}
                style={emailStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                rusthenronald9@gmail.com
            </button>
        </div>
    )
}export default Contact