import Nav from "../Nav/Nav";
import Henry from '../../assets/certificadoHenry.PNG'
import s from './About.module.css'

export default function AboutEs(){
    
    return(
        <div className={s.container}>
            <div className={s.backGround}>
                <Nav/>
                <main className={s.main}>
                    <div>
                        <h1 className={s.title}>Sobre Mi</h1>
                    </div>
                    <div className={s.divTexto}>
                        <div>
                            <h3>Quien soy?</h3>
                            <p>Soy Agop Chorbadjian, Fullstack Web Developer graduado de Henry. Realize un bootcamp intensivo durante cuatro meses, con mas de 600hs de estudio.</p>
                            <br />
                            <h3>Que hago?</h3>
                            <p>Ahora estoy buscando oportunidades para aplicar y ampliar aún más mi conjunto de habilidades, así como contribuir al éxito de empresas innovadoras de TI. Confío en mi capacidad para impulsar iniciativas de desarrollo web impactantes, aportando una combinación de destreza técnica y pasión por la excelencia a cada proyecto que emprendo.
                            </p>
                        </div>
                        <img src={Henry} alt="Certificado" className={s.img}/>
                    </div>
                </main>
            </div>
        </div>)
}