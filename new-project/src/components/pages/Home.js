import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../Layout/LinkButton'
function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to='NewProject' text='Criar Projeto' />
            <img src={savings} alt='imagem cofrinho'></img>
        </section>
    )
}export default Home