import {useState} from 'react'

function Form2(){

    const [email,setEmail]=useState()
    const [useremail,setUserEmail]=useState()

    function EnviarEmail(e){
        e.preventDefault()
        console.log('email enviado!')
        setUserEmail(email)
    }

    return(
        <div>
            <form>
                <label htmlFor="email">E-mail </label>
                <input type='email' placeholder="Digite seu e-mail" id='email' onChange={(e)=>setEmail(e.target.value)}></input>
                <button type='submit' onClick={EnviarEmail}>Enviar</button>
                {useremail}
            </form>
        </div>
    )
} export default Form2