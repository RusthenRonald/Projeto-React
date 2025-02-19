import {useState} from 'react'

function Condicional(){

    const [email,setEmail] =useState()
    const [userEmail,setUserEmail] =useState()

    function EnviarEmail(e){
        e.preventDefault()
        console.log("testando")
        setUserEmail(email)//Permite exibir o último e-mail cadastrado mesmo se o usuário apagar o input depois.
    }
    return(
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input type='email' placeholder='Digite seu e-mail...' onChange={(e)=>setEmail(e.target.value)}></input>
                <button type='submit' onClick={EnviarEmail}>Enviar E-mail</button>
                {userEmail}
            </form>
        </div>
    )
} export default Condicional