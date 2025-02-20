function OutraLista({itens}){
    return(
        <>  
            <h3>Lista de coisas boas</h3>
            {itens.map((itens,index)=>
            <p key={index}>{itens}</p>)}
        </>
    )
} export default OutraLista