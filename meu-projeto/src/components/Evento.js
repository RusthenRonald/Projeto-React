import Button from "./evento/Button"
function Evento(){
    function MeuEvento(){
        console.log(`Primeiro Evento!`)
    }
    function SegundoEvento(){
        console.log("Ativando o segundo evento!")
    }
    return(
        <>
            <p>Clique para ativar o Evento</p>
            <Button event={MeuEvento} text='Primeiro evento'/>
            <Button event={SegundoEvento} text='Segundo Evento!'/>
        </>
    )
} export default Evento