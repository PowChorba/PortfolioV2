import Nav from "../Nav/Nav";
import Henry from '../../assets/certificadoHenry.PNG'
import s from './About.module.css'

export default function AboutEn(){
    
    return(
        <div className={s.container}>
            <div className={s.backGround}>
                <Nav/>
                <main className={s.main}>
                    <div>
                        <h1 className={s.title}>About Me</h1>
                    </div>
                    <div className={s.divTexto}>
                        <div>
                            <h3>Who I am?</h3>
                            <p>I'm Agop Chorbadjian, Fullstack Web Developer graduated from Henry. I did an intensive bootcamp for four months, with more than 600 hours of study.</p>
                            <br />
                            <h3>What I do?</h3>
                            <p>I am constantly evolving, trying to improve day by day. Acquiring new knowledge and implementing it in small projects,
                            to grow within the IT world.
                            </p>
                        </div>
                        <img src={Henry} alt="Certificado" className={s.img}/>
                    </div>
                </main>
            </div>
        </div>)
}