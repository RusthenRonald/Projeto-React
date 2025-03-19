import styles from "./ProjectCard.module.css"
import {BsPencil,BsFillTrashFill} from "react-icons/bs"

function ProjectCard ({id,name,budget,category,handleremove}){
    return(
        <div>
            <p>{name}</p>
        </div>
    )
} export default ProjectCard