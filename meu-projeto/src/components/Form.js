import {useState} from 'react'

function Form(){
    function Enviar(e){
        e.preventDefault()
        console.log(name)
        console.log(password)
        console.log('Cadastrou usuário!')
    }

    const [name,setName] =useState()
    const [password,setPassword]=useState()
    function Mudanca(e){
       setName( e.target.value)
    }
    return(
        <div>
            <h1>Meu cadatro</h1>
            <form onSubmit={Enviar}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" placeholder="Digite seu nome" id='name' onChange={Mudanca}></input >
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type='password' placeholder='Digite sua senha' id='password' onChange={(e)=> setPassword(e.target.value)}></input>
                </div>
                <div>
                    <input type="submit"></input>
                </div>
            </form>
        </div>
    )
} export default Form