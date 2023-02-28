import { useState, useContext } from "react";
import Context from "../context/Context";
import useBreedPictureAPI from "../hooks/useBreedPictureAPI";
import useListBreedsAPI from "../hooks/useListBreedsAPI";
import useResizeWindow from "../hooks/useResizeWindow";

import DatalistInput, { startsWithValueFilter } from "react-datalist-input";

export default function Input() {
    const [selectBreed, setSelectBreed] = useState('');
    const { dogPicturesCONTEXT, nextPicturesCONTEXT, setNextPicturesCONTEXT } = useContext(Context);
    const listBreeds = useListBreedsAPI();
    useBreedPictureAPI(selectBreed);
    
    const width = useResizeWindow();

    const displayCards = () => {
        if (width <= 683) return 4;
        if (width <= 900) return 6;
        if (width <= 1232) return 10;
        if (width >= 900) return 12;
    }

    const handleSelectBreed = (event) => {
        const addHifen = event.value.replace(/ /g, '/')        
        setSelectBreed(addHifen)
    }
    
    const nextPicture = (event) => {
        event.preventDefault();
        setNextPicturesCONTEXT(nextPicturesCONTEXT + displayCards());        
       
        if (nextPicturesCONTEXT >= dogPicturesCONTEXT.length) {            
            setNextPicturesCONTEXT(displayCards());
        }
    }
    
    return (
        <div className="gallery__nav__input">
            <DatalistInput
                placeholder="Type a breed here."                
                onSelect={handleSelectBreed}
                filters={[startsWithValueFilter]}               
                items={listBreeds}
            />
            <a href='' className='gallery__nav__input-btn' onClick={nextPicture}>more !</a>
        </div>
    )
};
