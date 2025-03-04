import {useNavigate} from 'react-router-dom'
import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
function NewProject(){

    const navigate = useNavigate()

    function createPost(project){
        // inicialize cost and services
        project.cost =0
        project.services=[]
        //O POST é um método HTTP usado em APIs para enviar dados para o servidor. 
        fetch('http://localhost:5000/projects',{
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
            body: JSON.stringify(project)
            }).then((resp)=>resp.json())
                .then((data)=>{
                    console.log(data)
                    //redirect
                })
                .catch((err)=>console.log(err))

    }

    return(
        <div className={styles.new_project_container}>
            <h1>Criar Seu Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost}  btntext='Criar Projeto'/>
        </div>
    )
}export default NewProject