function Lista ({itens}){
    return(
        <div>
            <h3>Lista de coisas boas</h3>
            {
                itens.map((itens,index)=>(
                    <p key={index}>{itens}</p>
                ))
            }
        </div>
    )
} export default Lista