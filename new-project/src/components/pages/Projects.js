import {useLocation} from "react-router-dom"
import Message from "../Layout/Message"
function Projects (){

    const location=useLocation()
    let message=''
    if(location.state){
        message
    }

    return(
        <div>
            <h1>Meus Projetos</h1>
            <Message msg='Alguma mensagem' />
        </div>
    )
} export default Projects