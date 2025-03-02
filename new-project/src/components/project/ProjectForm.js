import styles from './ProjectForm.module.css'
import Input from '../form/Input'
function ProjectForm(){
    return(
        <form className={styles.form}>
            <Input type='text' text='Nome do projeto' name='name' placeholder='Insira o nome do projeto'/>
            <div>
                <input type='number' placeholder="Insira o orçamento total"></input>
            </div>
            <div>
                <select name="category_id">
                    <option disabled selected>Selecione a categoria</option>
                    <option></option>
                </select>
            </div>
            <div>
                <input type="submit" value='criar projeto'></input>
            </div>
        </form>
    )
} export default ProjectForm