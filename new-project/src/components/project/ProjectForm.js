import {useState} from 'react'
import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'
function ProjectForm(props){

    const [categories,setCategories]=useState([])

    fetch("http://localhost:5000/categories",{
        method:"GET",//define oque queremos fazer na API
        headers:{
            'Content-Type':'application/json'// está informando que esperamos receber JSON.
        }
    })
    .then()
    .catch((err)=>console.log(err))// Captura erros caso a requisição falhe.

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