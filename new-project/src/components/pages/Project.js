import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState ,useEffect} from 'react'
import Loading from '../Layout/Loading'
import Container from '../Layout/Container'
import ProjectForm from '../project/ProjectForm'

function Project(){
    //pegando id pela url
    const {id} = useParams()
    console.log(id)

    const [project,setProject]=useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)

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

    function editPost(project){
        //budget validation
        if(project.budget < project.cost){
            //message
        }
        fetch(`http://localhost:5000/projects/${project.id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            }
        })
    }

    return(
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass='colum'>
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
                    </Container>
                </div>
            ):(
                <p><Loading/></p>
            )}
        </>
    )
} export default Project