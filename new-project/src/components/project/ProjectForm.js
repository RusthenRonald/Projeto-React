import {useState} from 'react'
import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'
function ProjectForm(props){

    const [categories,setCategories] = useState([])

    fetch("http://localhost:5000/categories",{
        method:"GET",
        headers:{
            'Content-Type': 'application/json'//determinando tipo da comunicação
        }
    })//obtendo e consumindo dados da api 

    return(
        <form className={styles.form}>
            <Input
                type='text' 
                text='Nome do projeto:' 
                name='name' 
                placeholder='Insira o nome do projeto'/>
            <Input 
                type='number' 
                text='Orçamento do projeto:' 
                name='budget' 
                placeholder='Insira o orçamento total'/>
            <Select name='category_id' text='Selecione a categoria'/>
           <Submit text={props.btntext}/>
        </form>
    )
} export default ProjectForm