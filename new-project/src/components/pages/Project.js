import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState ,useEffect} from 'react'
import Loading from '../Layout/Loading'
import Container from '../Layout/Container'
import ProjectForm from '../project/ProjectForm'
import Message from "../Layout/Message"
import ServiceForm from '../Services/ServiceForm'

function Project(){
    //pegando id pela url
    const {id} = useParams()
    console.log(id)

    const [project,setProject]=useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm,setShowServiceForm] = useState(false)
    const [message,setMessage] = useState()
    const [type,setType] = useState()

    useEffect(()=>{
        setTimeout(()=>{
            fetch(`http://localhost:5000/projects/${id}`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                },
            }).then((resp)=>resp.json())
            .then((data)=>{
                setProject(data)
                console.log(data)
            })
            .catch((err)=>console.log(err))
        },300)
    },[id])

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }
    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }

    function editPost(project){

        setMessage("")//reinicia estado pra nao dar erro devido o mesmo nome

        //budget validation
        if(project.budget < project.cost){
            //message
            setMessage("O orçamento não pode ser menor que o custo do projeto")
            setType('error')
            return false //parar projeto
        }
        fetch(`http://localhost:5000/projects/${project.id}`,{
            method:"PATCH",//altera só qoue foi mudado
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(project),
        }).then(resp=>resp.json())
        .then((data)=>{
            setProject(data)
            setShowProjectForm(false)//fecha form de edição
            //message
            setMessage("Projeto atualizado!")
            setType('sucess')
        })
        .catch(err=>console.log(err))
    }

    return(
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass='colum'>
                        {message && <Message type={type} msg={message}/> }
                        <div className={styles.details_container}>
                            <h1> Projeto: {project.name}</h1>
                            <button onClick={toggleProjectForm} className={styles.btn}>
                                {!showProjectForm ? 'Editar Projeto':'Fechar'}
                            </button>{/*alterna form do projeto*/}

                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p><span>Categoria :</span> {project.category.name}</p>
                                    <p><span>Total de Orçamento :</span> R${project.budget}</p>
                                    <p><span>Total Utilizado:</span> R${project.cost}</p>
                                </div>
                            ):(
                                <div className={styles.project_info}>
                                    <ProjectForm handleSubmit={editPost}  
                                    projectData={project} //os dados que ja estao salvos
                                    btntext="Concluir edição"/>
                                </div>
                            )}
                        </div>

                        <div className={styles.service_form_container}>
                            <h2>Adicione um serviço:</h2>
                            <button onClick={toggleServiceForm} className={styles.btn}>
                                {!showServiceForm? "Adicionar serviço":"Fechar"}
                            </button>{/*alterna form do projeto*/}
                            <div className={styles.project_info}>
                                {showServiceForm && (
                                    <ServiceForm/>
                                )
                                }
                            </div>
                        </div>

                        <h2>Serviços</h2>
                        <Container customClass="start">
                                <p>Itens de serviços</p>
                        </Container>

                    </Container>
                </div>
            ):(
                <p><Loading/></p>
            )}
        </>
    )
} export default Project