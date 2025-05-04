import styles from "../project/ProjectForm.module.css"
import { useState } from "react"
import Input from "../form/Input"
import Submit from "../form/Submit"

function ServiceForm({handleSubmit,btnText,projectData}){

    const [service,setService] = useState({})

    function submit(e){
        e.preventDefault()
        projectData.services.push(service)//está adicionando o objeto service (preenchido no formulário) ao array services dentro do objeto projectData.
        handleSubmit(projectData)
    }

    function handleChange(e){
        setService({...service, [e.target.name] : e.target.value})
    }
    return (
        <form action="" className={styles.form} onSubmit={submit}>
            <Input type="text"
            text="Nome do serviço"
            name="name"
            placeholder="Insira o nome do serviço"
            handleOnchange={handleChange}
            />
            <Input type="number"
            text="Custo do Serviço"
            name="cost"
            placeholder="Insira o valor total"
            handleOnchange={handleChange}
            />
            <Input type="text"
            text="Descrição do serviço"
            name="description"
            placeholder="Descreva do serviço"
            handleOnchange={handleChange}
            />

            <Submit text={btnText}/>
        </form>
    )
} 

export default ServiceForm