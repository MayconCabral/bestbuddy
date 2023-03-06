import { useEffect, useContext } from 'react';
import Context from '../context/Context';

import  useResizeWindow  from '../hooks/useResizeWindow';
import Cards from '../components/Cards';


export default function Pictures() {
    const { dogPicturesCONTEXT, nextPicturesCONTEXT } = useContext(Context);
    
    const width = useResizeWindow();

    const displayCards = () => {
        if (width <= 683) return 4;
        if (width <= 900) return 6;
        if (width <= 1232) return 10;
        if (width >= 1232) return 12;
    }
    
    useEffect(() => {

    }, [dogPicturesCONTEXT])

    return (
        <div className="gallery__container">
        {
         dogPicturesCONTEXT.slice(nextPicturesCONTEXT, nextPicturesCONTEXT + displayCards()).map((pictures, index) => (
             <Cards img={pictures} key={index}/>
         ))
        }
         </div>
    )
}
