function Lista ({itens}){
    return(
        <div>
            <h3>Lista de coisas boas</h3>
            {itens.length>0 ? (
                itens.map((itens,index)=>(
                    <p key={index}>{itens}</p>
                ))) : (
                    <p>nenhum item na lista</p>
                )
            }
        </div>
    )
} export default Lista