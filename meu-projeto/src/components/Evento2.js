function Evento2(){
    function meuEvento2(){
        console.log('Olá, rusthen!')
    }
    return(
        <div>
            <p>Clique abaixo para disparar o evento</p>
            <button onClick={meuEvento2}>Ativar!</button>
        </div>
    )
}export default Evento2