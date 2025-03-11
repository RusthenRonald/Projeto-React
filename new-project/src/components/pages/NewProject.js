import {useNavigate} from 'react-router-dom'
import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
function NewProject(){

    const navigate =useNavigate()//permite que o usuário seja redirecionado para outra página depois de criar um projeto.

    function createPost(project){
        project.cost= 0
        project.services= []

        fetch("http://localhost:5000/projects",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(project)
        }).then(((resp)=> resp.json()))
        .then((data)=>{
            console.log(data)
            //redirect
            navigate('/projects' {message: 'Projeto criado com sucesso!'})
        })
        .catch((err)=>console.log(err))
    }

    return(
        <div className={styles.new_project_container}>
            <h1>Criar Seu Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btntext='Criar Projeto'/>
        </div>
    )
}export default NewProject