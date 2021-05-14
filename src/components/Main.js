import React, {useRef, useEffect} from 'react'
import {TweenMax} from 'gsap'
import Hero from './sections/Hero'
import Information from './sections/Information'

const Main = () => {

    let body = useRef(null)

    useEffect(() => {
        // Get Hourly Day
        let hourlyBackground = ''
        let day = new Date();
        let hora = day.getHours();
        let minutos = day.getMinutes();

        if( hora >= 7 && minutos >= 0 && hora <= 12 && minutos <= 59 ) {
            // DIA
            hourlyBackground = '#84B8D9';
        }
        if( hora >= 13 && minutos >= 0 && hora <= 18 && minutos <= 59 ) {
            // TARDE
            hourlyBackground = '#F76C01';
        }
        if( hora >= 19 && minutos >= 0 && hora <= 23 && minutos <= 59 ) {
            // NOCHE
            hourlyBackground = '#1C2D8C';
        }
        if(hora >= 0 && minutos >= 0 && hora <= 6 && minutos <= 59) {
            // MADRUGADA
            hourlyBackground = "#121212";
        }

        TweenMax.to(body, 0.8, {background: `${hourlyBackground}`})

    })

    return (
        <main ref={ el => body = el}>
            <Hero />
            <Information />
        </main>
    )
}

export default Main