import {usestate} from 'react'

function Condicional(){
    return(
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input type='email' placeholder='Digite seu e-mail...'></input>
                <butto onClick={EnviarEmail}>Enviar E-mail</butto>
            </form>
        </div>
    )
} export default Condicional