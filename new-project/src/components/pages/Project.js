import styles from './Project.module.css'
import {parse,v4 as uuidv4} from "uuid"
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

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }
    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }

    function createService(project){
        //last service
        const lastService = project.services[project.services.length -1]//ultimo item

        lastService.id ==uuidv4()//criando id para ultimo serviço da lista


        const lastServiceCost =lastService.cost
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)
        //somando o custo total atual do projeto com o custo do serviço novo, para atualizar o valor gasto no projeto (project.cost).

        //maximum value validation
        if(newCost>parseFloat(project.budget)){
            setMessage("Orçamento ultrapassado, verifique o valor do serviço")
            setType('error')
            project.services.pop()
            return false //termina execução
        }
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
                                    <ServiceForm handleSubmit={createService}
                                    btnText="Adicionar Serviço"
                                    projectData={project}
                                    />
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