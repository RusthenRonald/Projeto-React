import {useState} from 'react'

function Condicional(){

    const [email,setEmail] =useState() //Se o usuário apagar o conteúdo do input, o valor se perde.
    const [userEmail,setUserEmail] =useState()//Permite exibir o último e-mail cadastrado mesmo se o usuário apagar o input depois.

    function EnviarEmail(e){
        e.preventDefault()
        console.log("testando")
        setUserEmail(email)
    }
    function LimparEmail(){
        setUserEmail=''
    }
    return(
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input type='email' placeholder='Digite seu e-mail...' onChange={(e)=>setEmail(e.target.value)}></input>
                <button type='submit' onClick={EnviarEmail}>Enviar E-mail</button>
                {userEmail &&(
                    <div>
                        O e-mail do usuário é {userEmail}
                        <button onClick={LimparEmail}>Limpar</button>
                    </div>
                )}
            </form>
        </div>
    )
} export default Condicional