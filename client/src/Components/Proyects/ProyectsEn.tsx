import React,{useState} from 'react'
import Nav from "../Nav/Nav";
import s from './Proyects.module.css'
import {BsGithub} from 'react-icons/bs'
import {FiExternalLink} from 'react-icons/fi'
import ChangApp from '../../assets/Capture.PNG'
import FastChat from '../../assets/FastChatImg.PNG'
import PokeDex from '../../assets/pokedex.PNG'
import Spicy from '../../assets/spicy.PNG'

export default function ProyectsEn(){
    const [fast, setFast] = useState<boolean>(true)
    const [chang, setChang] = useState<boolean>(false)
    const [poke, setPoke] = useState<boolean>(false)
    const [spicy, setSpicy] = useState<boolean>(false)
    
    const handleFast = () =>{
        setFast(true)
        setChang(false)
        setSpicy(false)
        setPoke(false)
    }

    const handleChang = () =>{
        setFast(false)
        setChang(true)
        setSpicy(false)
        setPoke(false)
    }

    const handlePoke = () => {
        setFast(false)
        setChang(false)
        setSpicy(false)
        setPoke(true)
    }

    const handleSpicy = () => {
        setFast(false)
        setChang(false)
        setPoke(false)
        setSpicy(true)
    }

    return(
        <div className={s.container}>
            <div className={s.backGround}>
                <Nav/>
                <main className={s.main}>
                    <div className={s.divBtns}>
                        <h3>My Proyects</h3>
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
                        <div onClick={handleSpicy} className={spicy ? s.divActive : s.divNoActive}>
                            <p>SpicyX</p>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" 
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className={s.svg}>
                            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                        </div>
                        <div className={s.description}>
                            <span>Description</span>
                                {/* CHANG APP */}
                                <p className={chang ? s.asd : s.displayNone}>ChangApp is a page created for those people who are dedicated to doing quick and small jobs. 
                                Where you publish your job offer and another person hires you, 
                                agreeing on the day and time. In addition, people can rate you so you will reach more customers!</p>
                                {/* FAST CHAT */}
                                <p className={fast ? s.asd : s.displayNone}>
                                FastChat is a chat in real time, which consists of a registration system, login and email verification. 
                                Once entered on the main page, you will be able to add, delete and block contacts. 
                                At the same time, you can create private chats and group chats. Also you can send images, icons, audios and text messages.
                                </p>
                                {/* POKEDEX */}
                                <p className={poke ? s.asd : s.displayNone}>The functionality of this page is a Single Page Application (SPA) based on the Pokemon theme with information pulled from a REST API.
                                In this app you can filter, sort and search for Pokemons with all their information. In turn, a new Pokemon can be created.</p>
                                {/* SPICY X */}
                                <p className={spicy ? s.asd : s.displayNone}>This is an adult page, where you can find videos from the main pages all in one. We used web scrapping to get the videos and put it in the DB (is all legal) and counts with an advertising. The app is developed with NextJS, NestJS and MongoDB. </p>
                        </div>
                        

                    </div>
                    <div className={s.video}>
                        <img src={ChangApp} alt='ChangApp' className={chang ? s.img : s.displayNone}/>
                        {/* <iframe src="https://www.youtube.com/embed/pTkY79n_7-U" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className={fast ? s.img : s.displayNone}></iframe> */}
                        <img src={FastChat} alt='fastChat' className={fast ? s.img : s.displayNone}/>
                        <img src={PokeDex} alt='PokeDex' className={poke ? s.img : s.displayNone}/>
                        <img src={Spicy} alt='SpicyX' className={spicy ? s.img : s.displayNone}/>
                        <div className={fast ? s.divButtons : s.displayNone}>
                            <button><a href="https://github.com/PowChorba/FastChat/tree/Pow" rel="noreferrer" target='_blank'><BsGithub/>{' '}Source Code</a></button>
                            <button><a href="https://fast-chat-chi.vercel.app/" rel="noreferrer" target='_blank'><FiExternalLink/>{' '}Deploy</a></button>
                        </div>
                        <div className={chang ? s.divButtons : s.displayNone}>
                            <button><a href="https://github.com/LuH3ss/changaapp/tree/Agop" rel="noreferrer" target='_blank'><BsGithub/>{' '}Source Code</a></button>
                            <button><a href="https://changappv2-8zkmz66iq-powchorba.vercel.app/" rel="noreferrer" target='_blank'><FiExternalLink/>{' '}Deploy</a></button>
                        </div>
                        <div className={poke ? s.divButtons : s.displayNone}>
                            <button><a href="https://github.com/PowChorba/PI-POKEMONS" rel="noreferrer" target='_blank'><BsGithub/>{' '}Source Code</a></button>
                            <button><a href="https://pi-pokemons-chi.vercel.app/home" rel="noreferrer" target='_blank'><FiExternalLink/>{' '}Deploy</a></button>
                        </div>
                        <div className={spicy ? s.divButtons : s.displayNone}>
                            <button><a href="https://github.com/PowChorba/Spicy" rel="noreferrer" target='_blank'><BsGithub/>{' '}Source Code</a></button>
                            <button><a href="https://videospicy.online/" rel="noreferrer" target='_blank'><FiExternalLink/>{' '}Deploy</a></button>
                        </div>
                    </div>
                </main>
            </div>
        </div>)
}