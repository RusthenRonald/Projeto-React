import {useLocation} from "react-router-dom"
import styles from './Projects.module.css'
import Message from "../Layout/Message"
import Container from '../Layout/Container'
function Projects (){
    
    const location=useLocation() // useLocation() para recuperar os dados passados no state
    let message=''
    if(location.state){
        message=location.state.message
    } //Se o state existir, o valor da chave message (que foi passado na navegação) é extraído e atribuído à variável message.

    return(
        <div>
            <div>
                <h1>Meus Projetos</h1>
                <a href="#">Novo Projeto</a>
            </div>
            {message && <Message type='sucess' msg={message}/>}
        </div>
    )
} export default Projects