import {useState} from 'react'

function Form(){
    function Enviar(event){
        event.preventDefault()
        console.log(name)
        console.log('Cadastrou usuário!')
    }

    function Mudanca(e){
        setName(e.target.value)
    }
    const [name,setName]=useState('rusthen')

    return(
        <div>
            <h1>Meu cadatro</h1>
            <form onSubmit={Enviar}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" placeholder="Digite seu nome" id='name' onChange={Mudanca} ></input>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type='password' placeholder='Digite sua senha' id='password'></input>
                </div>
                <div>
                    <input type="submit"></input>
                </div>
            </form>
        </div>
    )
} export default Form