import { useEffect, useState, useContext } from "react";
import Context from "../context/Context";
import axios from "axios";

export default function useListBreedsAPI() {
    const [listBreeds, setListBreeds] = useState([]);
    const { setBreedCONTEXT } = useContext(Context);

    useEffect(() => {
        axios.get('https://dog.ceo/api/breeds/list/all')
            .then(({data}) => {
                const listBreeds = Object.keys(data.message)
                                    .map(breed => {                
                                            if (data.message[breed].length) {                                           
                                                return data.message[breed].map(SubBreed => `${breed} ${SubBreed}`)
                                            } else {
                                            return breed
                                            }
                                        });
                    
                const breeds = listBreeds.flat();
                setBreedCONTEXT(breeds);

                const result = breeds.reduce((acc, cur) => {                    
                        acc.push({
                                    id: cur,
                                    value: cur
                                });
                        return acc
                    }, []);

                setListBreeds(result);
            }).catch( error => console.log(error.message));        
    }, []);

    return listBreeds
};
