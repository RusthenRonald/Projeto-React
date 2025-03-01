import {useEffect, useState} from 'react'
import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'
function ProjectForm({btntext,handleSubmit,projectData}){

    const [categories,setCategories]=useState([])
    const [project,setProject]=useState(projectData||{})

    useEffect(()=>{
    fetch('http://localhost:5000/categories',{
        method:'GET',
        headers:{"Content-Type":"application/json"}
    }  
    ).then((resp)=>resp.json())
    .then((data)=>setCategories(data))
    .catch((err)=>console.log(err))

   },[])

  
   const submit = (e) =>{
        e.preventDefault()
        handleSubmit(project)//nossa função vai ter como argumento o project que são os dados
   }

   //A função handleChange(e) atualiza o estado project conforme o usuário digita nos campos do formulário.
   //...project é usado para salvar os valores antigos porque o state não salva
   //pegmos o name atribuimos o novo valor
   function handleChange(e){
        setProject({...project, [e.target.name]:e.target.value})
        console.log(project)
   }

    //nossa prop handleonchange do input esta recebendo um valor que é a função handleChange
    return(
        <form className={styles.form} onSubmit={submit}>
            <Input
                type='text' 
                text='Nome do projeto:' 
                name='name' 
                placeholder='Insira o nome do projeto' 
                handleOnchange={handleChange}/>
            <Input 
                type='number' 
                text='Orçamento do projeto:' 
                name='budget' 
                placeholder='Insira o orçamento total'
                handleOnchange={handleChange} />
            <Select name='category_id' text='Selecione a categoria' options={categories}/>
           <Submit text={btntext}/>
        </form>
    )
} export default ProjectForm


/* Uso do useEffect para a requisição à API
Antes, o fetch estava sendo chamado diretamente no corpo do componente, o que significava que a requisição seria feita sempre que o componente fosse renderizado. Com a alteração, a requisição é feita apenas uma vez, assim que o componente for montado na tela (ou seja, na primeira renderização). Isso é garantido pelo array de dependências vazio [] no useEffect, que impede a execução repetida da função de efeito.

Antes: O fetch era executado toda vez que o componente era renderizado.
Agora: O fetch é executado apenas uma vez, logo após o componente ser montado pela primeira vez.*/ 

/*Quando você armazena as categorias diretamente na API, isso permite centralizar e gerenciar os dados de forma consistente. Por exemplo, se você precisar atualizar a lista de categorias, você pode fazer isso diretamente na API e o front-end será atualizado automaticamente.
Isso evita a necessidade de atualizar o código ou o front-end sempre que houver uma mudança nas categorias. O sistema de front-end só precisa fazer a requisição à API para obter as informações mais recentes.*/ 
