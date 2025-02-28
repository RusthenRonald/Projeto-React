function ProjectForm(){
    return(
        <form>
            <div>
                <input type="text" placeholder="Insira um nome do projeto"></input>
            </div>
            <div>
                <input type='number' placeholder="Insira o orçamento total"></input>
            </div>
            <select name="category_id">
                <option disabled>Selecione a categoria</option>
                <option></option>
                <option></option>
                <option></option>
            </select>
        </form>
    )
} export default ProjectForm