import {usestate} from 'react'

function Condicional(){
    function EnviarEmail(e){
        e.preventDefault()
        console.log("testando")
    }
    return(
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input type='email' placeholder='Digite seu e-mail...'></input>
                <button type='submit' onClick={EnviarEmail}>Enviar E-mail</button>
            </form>
        </div>
    )
} export default Condicional