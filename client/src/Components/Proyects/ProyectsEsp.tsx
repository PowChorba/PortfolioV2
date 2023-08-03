import React,{useState} from 'react'
import Nav from "../Nav/Nav";
import s from './Proyects.module.css'
import {BsGithub} from 'react-icons/bs'
import {FiExternalLink} from 'react-icons/fi'
import ChangApp from '../../assets/Capture.PNG'
import FastChat from '../../assets/FastChatImg.PNG'
import PokeDex from '../../assets/pokedex.PNG'
import Spicy from '../../assets/spicy.PNG'
import Casino from '../../assets/spicybets.PNG'
import emailjs from 'emailjs-com';

export default function ProyectsEsp(){
    const [fast, setFast] = useState<boolean>(true)
    const [chang, setChang] = useState<boolean>(false)
    const [poke, setPoke] = useState<boolean>(false)
    const [spicy, setSpicy] = useState<boolean>(false)
    const [casino, setCasino] = useState<boolean>(false)
    
    const handleFast = () =>{
        setFast(true)
        setChang(false)
        setSpicy(false)
        setPoke(false)
        setCasino(false)
    }

    const handleChang = () =>{
        setFast(false)
        setChang(true)
        setSpicy(false)
        setPoke(false)
        setCasino(false)

    }

    const handlePoke = () => {
        setFast(false)
        setChang(false)
        setSpicy(false)
        setPoke(true)
        setCasino(false)

    }

    // const handleSpicy = () => {
    //     setFast(false)
    //     setChang(false)
    //     setPoke(false)
    //     setSpicy(true)
    //     setCasino(false)

    // }

    const handleCasino = () => {
        setFast(false)
        setChang(false)
        setPoke(false)
        setSpicy(false)
        setCasino(true)
    }

    const handleEmailSend = () => {
        const templateParams = {
          // Define the parameters for the email template
          // You can retrieve these values from user inputs or define them in your component
          to_email: 'pow.chorba@hotmail.com',
          from_name: 'Profile Web',
          message: 'Entraron a la pagina!',
        };
    
        emailjs.send('service_03v5rjv', 'template_2mgcpvv', templateParams, 'gQK16Eo-eguluAAfh')
          .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
          })
          .catch((error) => {
            console.log('Email sending failed...', error);
          });
    }      

    return(
        <div className={s.container}>
            <div className={s.backGround}>
                <Nav/>
                <main className={s.main}>
                    <div className={s.divBtns}>
                        <h3>Mis proyectos</h3>
                        <div onClick={handleFast} className={fast ? s.divActive : s.divNoActive}>
                            <p>FastChat</p>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" 
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className={s.svg}>
                            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                        </div>
                        <div onClick={handleChang} className={chang ? s.divActive : s.divNoActive}>
                            <p>ChangApp</p>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" 
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className={s.svg}>
                            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                        </div>
                        <div onClick={handlePoke} className={poke ? s.divActive : s.divNoActive}>
                            <p>PokeDex</p>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" 
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className={s.svg}>
                            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                        </div>
                        {/* <div onClick={handleSpicy} className={spicy ? s.divActive : s.divNoActive}>
                            <p>SpicyX</p>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" 
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className={s.svg}>
                            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                        </div> */}
                        <div onClick={handleCasino} className={casino ? s.divActive : s.divNoActive}>
                            <p>SpicyBets</p>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" 
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className={s.svg}>
                            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                        </div>
                        <div className={s.description}>
                            <span>Description</span>
                                {/* CHANG APP */}
                                <p className={chang ? s.asd : s.displayNone}>ChangApp es una pagina creada para esas personas que se dedican a realizar trabajos rapidos y pequeños (changas). 
                                En la cual, la persona publica su perfil y otra persona lo contrata, arreglando dias y horarios. 
                                Ademas, los clientes pueden dejar reseñas a los perfiles y asi alcanzar a mas clientes!</p>
                                {/* FAST CHAT */}
                                <p className={fast ? s.asd : s.displayNone}>
                                FastChat es un chat en tiempo real, el cual cuenta con un sistema de registro, login y verificacion de email. 
                                Una ves ingresado a la pagina principal, vas a poder agregar, eliminar y bloquear contactos. 
                                A la vez, podes crear chats privados y grupales. Cuenta con opcion de envio de imagenes, iconos, audios y mensajes de texto.
                                </p>
                                {/* POKEDEX */}
                                <p className={poke ? s.asd : s.displayNone}>La funcionalidad de esta pagina es un SPA(Single Page Application), basada en la tematica Pokemon y obteniendo la informacion de una REST API.
                                Dentro de la aplicacion podes filtrar, ordenar o buscar los Pokemons con toda su informacion. Ademas, podes crear un Pokemon propio!</p>
                                {/* SPICY X */}
                                {/* <p className={spicy ? s.asd : s.displayNone}>Esta es una pagina para adultos. Contiene videos de las mejores paginas, que fueron obtenidas a traves de web scrapping y cuenta con un sistema de publicidad. Esta desarrollada con NextJS, NestJS y MongoDB </p> */}
                                {/* SPICYBETS */}
                                <p className={casino ? s.asd : s.displayNone}>SpicyBets es una pagina para apuestas Online. Cuenta con un sistema de maquinitas tragamonedas (Slots), en el cual podes jugar con plata falsa para pasar el tiempo. Ademas, cuenta con un sistema de login y autenticacion. Esta desarrollada con NextJS para el front, NestJS para el back y MongoDB para la base de datos.</p>
                        </div>
                        

                    </div>
                    <div className={s.video}>
                        <img src={ChangApp} alt='ChangApp' className={chang ? s.img : s.displayNone}/>
                        {/* <iframe src="https://www.youtube.com/embed/pTkY79n_7-U" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className={fast ? s.img : s.displayNone}></iframe> */}
                        <img src={FastChat} alt='fastChat' className={fast ? s.img : s.displayNone}/>
                        <img src={PokeDex} alt='PokeDex' className={poke ? s.img : s.displayNone}/>
                        {/* <img src={Spicy} alt='SpicyX' className={spicy ? s.img : s.displayNone}/> */}
                        <img src={Casino} alt='SpicyBets' className={casino ? s.img : s.displayNone}/>
                        <div className={fast ? s.divButtons : s.displayNone}>
                            <button><a href="https://github.com/PowChorba/FastChat/tree/Pow" rel="noreferrer" target='_blank'><BsGithub/>{' '}Codigo Fuente</a></button>
                            <button><a href="https://fast-chat-chi.vercel.app/" rel="noreferrer" target='_blank'><FiExternalLink/>{' '}Deploy</a></button>
                        </div>
                        <div className={chang ? s.divButtons : s.displayNone}>
                            <button><a href="https://github.com/LuH3ss/changaapp/tree/Agop" rel="noreferrer" target='_blank'><BsGithub/>{' '}Codigo Fuente</a></button>
                            <button><a href="https://changappv2-8zkmz66iq-powchorba.vercel.app/" rel="noreferrer" target='_blank'><FiExternalLink/>{' '}Deploy</a></button>
                        </div>
                        <div className={poke ? s.divButtons : s.displayNone}>
                            <button><a href="https://github.com/PowChorba/PI-POKEMONS" rel="noreferrer" target='_blank'><BsGithub/>{' '}Codigo Fuente</a></button>
                            <button><a href="https://pi-pokemons-chi.vercel.app/home" rel="noreferrer" target='_blank'><FiExternalLink/>{' '}Deploy</a></button>
                        </div>
                        {/* <div className={spicy ? s.divButtons : s.displayNone}>
                            <button><a href="https://github.com/PowChorba/Spicy" rel="noreferrer" target='_blank'><BsGithub/>{' '}Codigo Fuente</a></button>
                            <button onClick={() => handleEmailSend()}><a href="https://pornspicyx.com" rel="noreferrer" target='_blank'><FiExternalLink/>{' '}Deploy</a></button>
                        </div> */}
                        <div className={casino ? s.divButtons : s.displayNone}>
                            <button><a href="https://github.com/PowChorba/Casino" rel="noreferrer" target='_blank'><BsGithub/>{' '}Codigo Fuente</a></button>
                            <button onClick={() => handleEmailSend()}><a href="https://casino-powchorba.vercel.app/" rel="noreferrer" target='_blank'><FiExternalLink/>{' '}Deploy</a></button>
                        </div>
                    </div>
                </main>
            </div>
        </div>)
}
