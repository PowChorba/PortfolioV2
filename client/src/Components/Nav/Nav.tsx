import { Link } from 'react-router-dom'
import s from './Nav.module.css'
import {useState} from 'react'
import {FaBars} from 'react-icons/fa'

export default function Nav(){
    const [bars,setBars] = useState(false)

    const handleBars = () => {
        setBars(!bars)
    }

    return(
        <nav className={s.container}>
            <FaBars className={s.bars} onClick={handleBars}/>
            <div className={bars ? s.displayNoneR :s.divLinks}>
                <div className={s.divLinks}>
                    <span className={s.tags}>{'</>'}</span>
                    <Link to='/'>Home</Link>
                    <Link to='/proyects'>Proyects</Link>
                    <Link to='/techs'>Techs</Link>
                    <Link to='/about'>About Me</Link>
                </div>
            </div>
            <div className={s.divSelect}>
                <select>
                    <option value="ES">ES</option>
                    <option value="EN">EN</option>
                </select>
            </div>
        </nav>)
}