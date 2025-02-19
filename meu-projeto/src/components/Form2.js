import {useState} from 'react'
function Form2(){
    return(
        <div>
            <form>
                <label htmlFor="name">Nome </label>
                <input type='text' placeholder="Digite seu nome" id='name'></input>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
} export default Form2