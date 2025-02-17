function Evento2(props){
    function meuEvento2(){
        console.log(`Olá, Rusthen! ${props.numero}`)
    }
    return(
        <div>
            <p>Clique abaixo para disparar o evento</p>
            <button onClick={meuEvento2}>Ativar!</button>
        </div>
    )
}export default Evento2