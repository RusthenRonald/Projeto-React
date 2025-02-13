function Evento({numero}){
    function MeuEvento(){
        console.log(` Olá , Rusthen ${numero}`)
    }
    return(
        <>
            <p>Clique para ativar o Evento</p>
            <button onClick={MeuEvento}>Ativar!</button>
        </>
    )
} export default Evento