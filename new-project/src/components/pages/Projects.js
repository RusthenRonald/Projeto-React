import {useLocation} from "react-router-dom"
import styles from './Projects.module.css'
import Message from "../Layout/Message"
import Container from '../Layout/Container'
import LinkButton from '../Layout/LinkButton'
import ProjectCard from "../project/ProjectCard"
import Loading from "../Layout/Loading"
import {useState,useEffect} from "react"

function Projects (){
    
    const [projects,setProjects] =useState([])
    const [removeLoading,setRemoveLoading]=useState(false)
    const [projectMessage,setProjectMessage]=useState("")

    //Envia um DELETE para o servidor com o id do projeto que quer excluir.
    function removeProject(id){
        fetch(`http://localhost:5000/projects/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        }).then((resp)=>resp.json())
        .then(()=>{
            setProjects(projects.filter((project)=> project.id !== id))
            //pra saber qual projeto remover verifica se id são diferentes
            //message
            setProjectMessage("Projeto removido com sucesso!")
        })
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
    
        setTimeout(()=>{
            fetch("http://localhost:5000/projects",
                {
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json"
                    }
                }
            ).then((resp)=>resp.json())
            .then((data)=>{
                console.log(data)
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch((err)=>console.log(err))
        },300)

    },[])

    const location=useLocation() // useLocation() para recuperar os dados passados no state
    let message=''
    if(location.state){
        message=location.state.message
    } //Se o state existir, o valor da chave message (que foi passado na navegação) é extraído e atribuído à variável message.

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to='/NewProject' text='Criar Projeto' />
            </div>
            {message && <Message type='sucess' msg={message}/>}
            {projectMessage && <Message type='sucess' msg={projectMessage}/>}
            <Container customClass='start'>
                {projects.length >0 &&
                    projects.map((project)=>(
                        <ProjectCard name={project.name} 
                        id={project.id}
                        budget={project.budget}
                        category={project.category?.name || 'Sem categoria'}
                        key={project.id}
                        handleRemove={removeProject}
                        />
                    ))
                }
                {!removeLoading && <Loading/>}
                {removeLoading && projects.length ===0 &&(
                    <p>Não há projetos cadastrados!</p>
                ) }
            </Container>
        </div>
    )
} export default Projects