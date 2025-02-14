import Proptypes from 'prop-types'
function Pessoa({nome,idade,profissão}){
    return( 
        <>
            <p>{nome} , {idade} , {profissão}</p>
        </>
    )
} export default Pessoa

Pessoa.propTypes ={
    idade:Proptypes.number,
    nome:Proptypes.string,
    profissão:Proptypes.string
}
Pessoa.defaultProps ={
    idade:0,
    nome:'Faltou nome',
    profissão:'faltou profissão'
}