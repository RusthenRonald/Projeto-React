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
                    <label htmlfor=''></label>
                    <input type="text" placeholder="Digite seu nome"></input>
                </div>
                <div>
                    <input type='password' placeholder='Digite sua senha'></input>
                </div>
                <div>
                    <input type="submit"></input>
                </div>
            </form>
        </div>
    )
} export default Form