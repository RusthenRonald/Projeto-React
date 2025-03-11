import {useState, useEffect} from 'react'

import styles from './Message.module.css'
function Message({type, msg}){

    const[visible,setVisible]=useState(false)


    useEffect(()=>{

        if(!msg){
            setVisible(false)
            return
        }
        //senão
        setVisible(true)

        const timer = setTimeout(()=>{
            setVisible(false) 
        },3000) // apos 3 segundos a visibilidade vai ser falsa e a msg vai sumir

        return ()=> clearTimeout(timer)
    },[msg])

    //Se visible === true, o <div> será renderizado.
    //Se visible === false, nada será renderizado.
    return(
        <>
            {
                visible && (
                    <div className={`${styles.message}${styles[type]}`}></div>
                )
            }
        </>  
    ) 
} export default Message