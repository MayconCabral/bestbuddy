import { motion as m } from 'framer-motion';
import { text_container, dog, dog_background, scale_bg, btn } from '../animation/home';

import dog_rose from '../img/dog_rose2.png';
import Button from '../components/Button';


export default function Home() {       

    return (
        <header className='home'>
            <m.div 
            variants={scale_bg}
            initial='hidden'
            animate='visible'
            exit='exit'
            className="home__scale"
            ></m.div>
            <div className='flex'>
                <m.div className='home__logo'
                variants={dog_background}
                initial='hidden'
                animate='visible'
                exit='exit'               
                >
                    <div className='home__logo__background'></div>
                    <m.img
                    variants={dog}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    
                    src={dog_rose} alt="A dog holding a rose with his mouth." />
                </m.div>
                <m.h1
                variants={text_container}
                initial='hidden'
                animate='visible'
                exit='exit'      
                className='home__header'>
                    <span>Your</span>
                    <span> best</span><span> buddy's</span>
                    <span> pictures</span>
                </m.h1>
                <m.nav
                variants={btn}
                initial='hidden'
                animate='visible'
                exit='exit'                
                className='home__nav'>
                    <Button class='btn btn-primary' text='gallery' link='/gallery'/>
                    <Button class='btn btn-tertiary' text='made by' link='/developer'/>
                </m.nav>
            </div>
        </header>
    )
};
