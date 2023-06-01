import s from './Home.module.css'
import Nav from '../Nav/Nav'
import Perfil from '../../assets/perfil.svg'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'

export default function HomeEsp(){
    return(
        <div className={s.container}>
            <div className={s.backGround}>
            <Nav/>
            <main className={s.main}>
                <div className={s.divTitle}>
                    <h1>Hola! Mi nombre es <br /> Agop Chorbadjian</h1>
                    <h3>{'<'}Desarrollador Web Fullstack{'/>'}</h3>
                    {/* <button className={s.btnCV}><a href="./AgopChorbadjianCV.pdf" download>Descargar CV</a></button> */}
                </div>
                <div>
                    <img src={Perfil} alt="AgopChorbadjian" className={s.image}/>
                </div>
            </main>
            <div className={s.divIcons}>
                <a href='https://www.linkedin.com/in/agopchorbadjian/' rel="noreferrer" target='_blank'><BsLinkedin/></a>
                <a href='https://github.com/PowChorba' rel="noreferrer" target='_blank'><BsGithub/></a>
                <a href='/'><SiGmail/></a>
            </div>
            </div>
        </div>)
}