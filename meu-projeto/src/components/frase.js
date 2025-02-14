import SayMyName from "./SayMyName"
function Frase(){
    return(
        <div>
            <h1>Criando primeiro componente</h1>
            <SayMyName nome='rusthen'/>
            <SayMyName nome='josé'/>
            <Marca ano_lançamento={120} marca='rusthen'/>
        </div>
    )
}
export default Frase