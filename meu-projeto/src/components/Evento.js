import Button from "./evento/Button"
function Evento({numero}){
    function MeuEvento(){
        console.log(` Olá , Rusthen ${numero}`)
    }
    return(
        <>
            <p>Clique para ativar o Evento</p>
            <Button event={MeuEvento} text='primeiro evento'></Button>
        </>
    )
} export default Evento