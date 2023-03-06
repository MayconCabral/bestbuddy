import { motion as m } from 'framer-motion';
import { cards } from '../animation/gallery';


export default function Cards(props) {
    return (
        <m.div
            variants={cards}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='gallery__container__card'
        >
            <img src={props.img} alt="" />
        </m.div>
        )
    };
