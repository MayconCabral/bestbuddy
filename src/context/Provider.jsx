import { useState } from "react";
import Context from "./Context";

export default function Provider({ children }) {
    const [breedCONTEXT, setBreedCONTEXT] = useState([]);
    const [dogPicturesCONTEXT, setDogPicturesCONTEXT] = useState([]);
    const [nextPicturesCONTEXT, setNextPicturesCONTEXT] = useState(0);    

    const values = {
        breedCONTEXT,
        setBreedCONTEXT,
        dogPicturesCONTEXT,
        setDogPicturesCONTEXT,
        nextPicturesCONTEXT,
        setNextPicturesCONTEXT
    };

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}
