import Proptypes from 'prop-types'
function Pessoa({nome,idade,profissão}){
    return( 
        <>
            <p>{nome} , {idade} , {profissão}</p>
        </>
    )
} export default Pessoa