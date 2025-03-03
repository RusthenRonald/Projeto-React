import {useEffect, useState} from 'react'
import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'
function ProjectForm(props){

    const [categories,setCategories]=useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/categories",{
            method:"GET",//define oque queremos fazer na API
            headers:{
                'Content-Type':'application/json'// está informando que esperamos receber JSON.
            }
        })
        .then((resp)=>resp.json())//oque eu receber de dado vira json
        .then((data)=>{//pego os dados em json e adiciono como parametro
            setCategories(data)
        })
        .catch((err)=>console.log(err))// Captura erros caso a requisição falhe.
    
    },[])
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
            <Select name='category_id' text='Selecione a categoria' options={categories}/>
           <Submit text={props.btntext}/>
        </form>
    )
} export default ProjectForm


/* Uso do useEffect para a requisição à API
Antes, o fetch estava sendo chamado diretamente no corpo do componente, o que significava que a requisição seria feita sempre que o componente fosse renderizado. Com a alteração, a requisição é feita apenas uma vez, assim que o componente for montado na tela (ou seja, na primeira renderização). Isso é garantido pelo array de dependências vazio [] no useEffect, que impede a execução repetida da função de efeito.

Antes: O fetch era executado toda vez que o componente era renderizado.
Agora: O fetch é executado apenas uma vez, logo após o componente ser montado pela primeira vez.*/ 
