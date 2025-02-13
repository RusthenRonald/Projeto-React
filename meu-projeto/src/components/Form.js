function Form(){
    function Enviar(event){
        event.preventDefault()
        console.log('Cadastrou usuário!')
    }
    return(
        <div>
            <h1>Meu cadatro</h1>
            <form onSubmit={Enviar}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type="text" placeholder="Digite seu nome" id='name'></input>
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input type='password' placeholder='Digite sua senha' id='senha'></input>
                </div>
                <div>
                    <input type="submit"></input>
                </div>
            </form>
        </div>
    )
} export default Form