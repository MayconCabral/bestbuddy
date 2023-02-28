import { useEffect, useContext } from "react";
import axios from "axios";
import Context from "../context/Context";

export default function useBreedPictureAPI(breed) {    
    const { breedCONTEXT, setDogPicturesCONTEXT } = useContext(Context);
    
    const isOk = breed.replace('/', ' ');    

    useEffect(() => {
        if (breedCONTEXT.includes(isOk)) {            
            axios.get(`https://dog.ceo/api/breed/${breed}/images`)
                .then(({data}) => {
                    setDogPicturesCONTEXT(data.message);
                }).catch( ({response}) => console.log(response.data.message));
        };
    }, [breed])    
    
};
