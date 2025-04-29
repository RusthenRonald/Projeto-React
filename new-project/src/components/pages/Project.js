import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState ,useEffect} from 'react'
import Loading from '../Layout/Loading'
import Container from '../Layout/Container'

function Project(){
    //pegando id pela url
    const {id} = useParams()
    console.log(id)

    const [project,setProject]=useState([])

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

    return(
        <>
            {project.name ? (
                <div>
                    <Container customClass='colum'>
                        <div>
                            <h1> Projeto: {project.name}</h1>
                            <button>Editar Projeto</button>
                        </div>
                    </Container>
                </div>
            ):(
                <p><Loading/></p>
            )}
        </>
    )
} export default Project