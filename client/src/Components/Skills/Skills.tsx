import Nav from "../Nav/Nav";
import HTML from '../../assets/html.png'
import JS from '../../assets/js.png'
import MONGODB from '../../assets/mongoDb.png'
import NODE from '../../assets/node.png'
import REACT from '../../assets/react.png'
import Redux from '../../assets/redux.png'
import Sequelize from '../../assets/sequelize.png'
import SQL from '../../assets/sql.png'
import TS from '../../assets/ts.png'
import CSS from '../../assets/css.png'
import s from './Skills.module.css'


export default function Skills() {
    return(
        <div className={s.container}>
            <div className={s.backGround}>
            <Nav/>
            <main className={s.main}>
                <div className={s.divTitle}>
                    <h1>Technologies</h1>
                    <p>This are some of my technologies/skills that I used on my proyects</p>
                </div>
                <div className={s.divSkills}>
                    <div>
                        <img src={HTML} alt="HTML" width='80px'/>
                    </div>
                    <div>
                        <img src={CSS} alt="CSS" width='80px'/>
                    </div>
                    <div>
                        <img src={JS} alt="JS" width='80px'/>
                    </div>
                    <div>
                        <img src={TS} alt="SQL" width='80px'/>
                    </div>
                    <div>
                        <img src={REACT} alt="REACT" width='80px'/>
                    </div>
                    <div>
                        <img src={Redux} alt="Redux" width='80px'/>
                    </div>
                    <div>
                        <img src={NODE} alt="NODE" width='80px'/>
                    </div>
                    <div>
                        <img src={MONGODB} alt="MONGODB" width='80px'/>
                    </div>
                    <div>
                        <img src={Sequelize} alt="Sequelize" width='80px'/>
                    </div>
                    <div>
                        <img src={SQL} alt="SQL" width='80px'/>
                    </div>    
                </div>
            </main>
            </div>
        </div>)
}