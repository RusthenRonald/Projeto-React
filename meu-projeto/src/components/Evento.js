import Button from "./evento/Button"
function Evento({numero}){
    function MeuEvento(){
        console.log(` Olá , Rusthen ${numero}`)
    }
    return(
        <>
            <p>Clique para ativar o Evento</p>
            <Button text='Primeiro evento'/>
        </>
    )
} export default Evento