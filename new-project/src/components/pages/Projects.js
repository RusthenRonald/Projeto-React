import {useLocation} from "react-router-dom"
import Message from "../Layout/Message"
function Projects (){
    
    const location=useLocation() // useLocation() para recuperar os dados passados no state
    let message=''
    if(location.state){
        message=location.state.message
    } //Se o state existir, o valor da chave message (que foi passado na navegação) é extraído e atribuído à variável message.

    return(
        <div>
            <h1>Meus Projetos</h1>
            {message && <Message type='sucess' msg={message}/>}
        </div>
    )
} export default Projects