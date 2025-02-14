import SayMyName from "./SayMyName"
import Pessoa from "./Pessoa"
function Frase(){
    return(
        <div>
            <h1>Criando primeiro componente</h1>
            <SayMyName nome='rusthen'/>
            <SayMyName nome='josé'/>
            <Pessoa nome='jose' idade={14} profissão='gari'/>
        </div>
    )
}
export default Frase