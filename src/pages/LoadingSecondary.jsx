import React from 'react';
import { motion as m } from 'framer-motion';

import { fade } from '../animation/loader';


export default function LoadingSecondary() {   
    return (        
        <m.div
        variants={fade}
        initial='hidden'
        animate='visible'
        exit='exit'  
        className='loader-secondary'>
           <div className="loader-secondary__container">
               <div className="loader-secondary__container__heart"><div></div></div>
           </div>
       </m.div>       
    )
}
