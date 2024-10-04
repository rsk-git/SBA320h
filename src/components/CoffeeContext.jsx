import axios from 'axios';
import {createContext, useState, useEffect} from 'react';

const CoffeeContext = createContext ();

export const CoffeeProvider = ({children}) => {
    const [coffees, setCoffees]= useState([]);
    const [error, setError]= useState (null);

useEffect(() => {
    const fetchCoffees = async () => {
        try {
            const response = await axios.get ('https://api.sampleapis.com/coffee/hot');
            setCoffees(response.data);
            console.log("Fetched Coffee Data:", response.data);
        } catch (error) {
           setError(error.message);
        };

    }

    fetchCoffees();
}, []);

return (
    <CoffeeContext.Provider value = {{coffees, error}}>
        {children}
    </CoffeeContext.Provider>
);
};

export default CoffeeContext;