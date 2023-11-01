import { Link } from 'react-router-dom'
import s from './Nav.module.css'
import {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import { useLocalStorage } from '../../useLocaleStorage/useLocaleStorage'
import emailjs from 'emailjs-com';


export default function NavEn(){
    const [bars,setBars] = useState(true)

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

    const handleEmailSend = () => {
        const templateParams = {
          // Define the parameters for the email template
          // You can retrieve these values from user inputs or define them in your component
          to_email: 'pow.chorba@hotmail.com',
          from_name: 'Profile Web',
          message: 'Hicieron click desde ',
        };
    
        emailjs.send('service_03v5rjv', 'template_q59vyc3', templateParams, 'gQK16Eo-eguluAAfh')
          .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
          })
          .catch((error) => {
            console.log('Email sending failed...', error);
          });
    }  

    return(
        <nav className={s.container}>
            <FaBars className={s.bars} onClick={handleBars}/>
            <div className={bars ? s.displayNoneR :s.divLinks}>
                <div className={s.divLinks}>
                    <span className={s.tags}>{'</>'}</span>
                    <Link to='/'>Home</Link>
                    <Link onClick={handleEmailSend} to='/proyects'>Projects</Link>
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
