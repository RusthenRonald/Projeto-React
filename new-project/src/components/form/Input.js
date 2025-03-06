import styles from './Input.module.css'
function Input({type,text,name,placeholder,handleOnchange,value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnchange} value={value}></input> 
        </div>
    ) //Isso significa que a prop handleOnchange do Input está recebendo a função handleChange do ProjectForm.
} export default Input