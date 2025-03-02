import styles from './Submit.module.css'
function Submit({text}){
    return(
        <div>
            <button className={styles.bnt}>{text}</button>
        </div>
    )
} export default Submit