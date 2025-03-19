import {useLocation} from "react-router-dom"
import styles from './Projects.module.css'
import Message from "../Layout/Message"
import Container from '../Layout/Container'
import LinkButton from '../Layout/LinkButton'
import ProjectCard from "./ProjectCard"
import {useState,useEffect} from "react"

function Projects (){
    
    const [projects,setProjects] =useState([])

    useEffect(()=>{

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
        })
        .catch((err)=>console.log(err))

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
                <LinkButton to='NewProject' text='Criar Projeto' />
            </div>
            {message && <Message type='sucess' msg={message}/>}
            <Container customClass='start'>
                {projects.length>0 && //verifica se há projeto
                    projects.map((projects)=>(
                        <ProjectCard name={projects.name}/>
                    ))
                }
            </Container>
        </div>
    )
} export default Projects