import {usestate} from 'react'

function Condicional(){
    function EnviarEmail(e){
        e.preventDefault()
        
    }
    return(
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input type='email' placeholder='Digite seu e-mail...'></input>
                <button onClick={EnviarEmail}>Enviar E-mail</button>
            </form>
        </div>
    )
} export default Condicional