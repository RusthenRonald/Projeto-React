function Evento(){
    function MeuEvento(){
        console.log("Ola, Rusthen!")
    }
    return(
        <>
            <p>Clique para ativar o Evento</p>
            <button onClick={MeuEvento}>Ativar!</button>
        </>
    )
} export default Evento