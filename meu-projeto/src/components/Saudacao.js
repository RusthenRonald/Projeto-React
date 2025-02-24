function Saudacao({nome}){
    function GerarSaudacao(algumNome){
        return `Olá , ${algumNome}, tudo bem? `
    }

    return(
        <>
            <p>{nome &&
            GerarSaudacao(nome)
            }</p>
        </>
    )
} export default Saudacao