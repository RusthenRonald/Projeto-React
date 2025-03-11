import {useState, useEffect} from 'react'

import styles from './Message.module.css'
function Message({type, msg}){

    const [visible, setVisible] = useState(false)//começa n exibindo


    useEffect(()=>{
        if(!msg){
            setVisible(false)
        }
    })
    return(
        <>
            {visible &&(
                <div className={`${styles.message}${styles[type]}`}></div>
            )}
        </>
    ) 
} export default Message