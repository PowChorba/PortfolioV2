import { Link } from 'react-router-dom'
import s from './Nav.module.css'
import {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import { useLocalStorage } from '../../useLocaleStorage/useLocaleStorage'

export default function NavEn(){
    const [bars,setBars] = useState(false)

    const handleBars = () => {
        setBars(!bars)
    }

    const [idioma, setIdioma] = useLocalStorage('idioma', 'es')

    const languageChange = (e: React.ChangeEvent<HTMLSelectElement> ) =>{
        setIdioma(e.target.value)
        setTimeout(() => {
            window.location.reload()
        },1000)
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
                <select onChange={(e) => languageChange(e)} defaultValue={idioma}>
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                </select>
            </div>
        </nav>)
}