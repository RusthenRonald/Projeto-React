import {useHistory} from 'react-router-dom'
import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
function NewProject(){

    const history = useHistory()

    function createPost(project){
        // inicialize cost and services
        project.cost =0
        project.services=[]
        //O POST é um método HTTP usado em APIs para enviar dados para o servidor. 
        fetch('http://localhost:5000/projects',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            }
        }
        )

    }

    return(
        <div className={styles.new_project_container}>
            <h1>Criar Seu Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btntext='Criar Projeto'/>
        </div>
    )
}export default NewProject