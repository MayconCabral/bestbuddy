import { useEffect, useContext } from 'react';
import Context from '../context/Context';

import  useResizeWindow  from '../hooks/useResizeWindow';
import Cards from '../components/Cards';
import Button from '../components/Button';
import Input from '../components/Input';


export default function Gallery() {
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
       <main className='gallery'>
            <svg className='gallery__svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5594B5" fillOpacity="1" d="M0,96L48,122.7C96,149,192,203,288,229.3C384,256,480,256,576,224C672,192,768,128,864,90.7C960,53,1056,43,1152,64C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <div className="flex-gallery">
                <div className="gallery__container">
                   {
                    dogPicturesCONTEXT.slice(nextPicturesCONTEXT, nextPicturesCONTEXT + displayCards()).map((pictures, index) => (
                        <Cards img={pictures} key={index}/>
                    ))
                   }
                </div>
                <nav className='gallery__nav'>
                    <Input/>                  
                    <Button class='btn btn-secondary' text='home' link='/'/>
                </nav>
            </div>
       </main>
    )
};
