import Button from "./evento/Button"
function Evento(){
    function MeuEvento(){
        console.log(`Primeiro Evento!`)
    }
    return(
        <>
            <p>Clique para ativar o Evento</p>
            <Button event={MeuEvento} text='Primeiro evento'/>
        </>
    )
} export default Evento