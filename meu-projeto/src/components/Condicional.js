import {useState} from 'react'

function Condicional(){

    const [email,setEmail] =useState()

    function EnviarEmail(e){
        e.preventDefault()
        console.log("testando")
        console.log(email)
    }
    return(
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input type='email' placeholder='Digite seu e-mail...' onChange={(e)=>setEmail(e.target.value)}></input>
                <button type='submit' onClick={EnviarEmail}>Enviar E-mail</button>
            </form>
        </div>
    )
} export default Condicional