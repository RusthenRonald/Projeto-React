function OutraLista({Lista}){
    return(
        <div>
            <h3>Exibindo lista</h3>
            {Lista.length>0 ? (
                Lista.map((item,index)=>(
                    <p key={index}>{item}</p>
                ))):(
                    <p>Não há itens na lista</p>
                )
            }
        </div>
    )
} export default OutraLista