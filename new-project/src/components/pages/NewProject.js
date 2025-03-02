import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
function NewProject(){
    return(
        <div className={styles.new_project_container}>
            <h1>Criar Seu Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btntext='Criar Projeto'/>
        </div>
    )
}export default NewProject