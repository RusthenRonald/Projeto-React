function Form2(){
    function Cadastrar(e){
        console.log('Cadastrou usuário!')
        e.preventDefault()
    }
    return(
            <form action="" onSubmit={Cadastrar}>
                <div>
                    <label htmlFor='text'>Nome</label>
                    <input type='text' placeholder='Digite seu nome' id='text'></input>
                </div>
                <div>
                    <label htmlFor='password'>Senha</label>
                    <input type='password' placeholder='Digite sua senha' id='password'></input>
                </div>
                <div>
                    <input type='submit' ></input>
                </div>
            </form>

    )
} export default Form2