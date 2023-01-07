import Nav from "../Nav/Nav";
import Henry from '../../assets/certificadoHenry.PNG'
import s from './About.module.css'

export default function About(){
    
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
                            <p>Soy Agop Chorbadjian, Fullstack Web Developer graduado de Henry. Realize un bootcamp intensivo durante cuatro meses, con mas de 600hs de estudio.</p>
                            <br />
                            <h3>Que hago?</h3>
                            <p>Estoy en constante evolucion, tratando de mejorar dia a dia. Adquiriendo nuevos conocimientos y implementandolos en pequenos proyectos, para asi,
                            poder crecer dentro del mundo IT.
                            </p>
                        </div>
                        <img src={Henry} alt="Certificado" className={s.img}/>
                    </div>
                </main>
            </div>
        </div>)
}