import { motion as m } from 'framer-motion';
import { dog, msg, title } from '../animation/error';

import Button from "../components/Button";
import error404 from '../img/error404.png';

export default function Error() {
    return (
        <div className="error-page">
            <m.h3
                variants={title}
                initial='hidden'
                animate='visible'
                exit='exit' 
                className="error-page__title"
            >
                404 error
            </m.h3>
            <div className="error-page__flex">
                <m.img
                 variants={dog}
                 initial='hidden'
                 animate='visible'
                 exit='exit'
                 src={error404} 
                 alt="a dog wearing a yellow jacket" 
                 className="error-page__img" 
                 />
                <m.div
                 variants={msg}
                 initial='hidden'
                 animate='visible'
                 exit='exit'
                className="error-page__flex-2"
                >
                    <div className="error-page__msg">
                        <m.h2
                        variants={msg}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                        >
                            <span>Sorry...</span> I couldn't sniff out the page you were looking for. 
                        </m.h2>
                    </div>
                    <nav>
                        <Button class='btn btn-primary' text='home' link='https://bestbuddy.onrender.com/'/>
                    </nav>
                </m.div>
            </div>
        </div>
    )
}
