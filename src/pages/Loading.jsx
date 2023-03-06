import React from 'react';
import { motion as m } from 'framer-motion';

import { fade } from '../animation/loader';


export default function Loader() {   
    return (        
            <m.div
             variants={fade}
             initial='hidden'
             animate='visible'
             exit='exit'  
             className='loader-home'>
                <div className="loader-home__container">
                    <div className="loader-home__container__heart"><div></div></div>
                </div>
            </m.div>       
    )
}
