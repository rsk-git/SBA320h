import {useState, useContext} from 'react';
 import CoffeeContext from './CoffeeContext.jsx';

import CoffeeItem from './CoffeeItem.jsx';

const CoffeeList = ({searchTerm}) => {
    const {coffees, error} = useContext(CoffeeContext);
    const [selectedCoffee, setSelectedCoffee] = useState(null);

    // if (error) return <p>Error fetching coffee: {error}</p>

    // if (!Array.isArray(Coffees)) return <p>No coffee data available.</p>

    // filter coffees on searched term
    const filteredCoffees = coffees.filter(coffee => coffee.title.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleSelectedCoffee = (coffee)=> {
        setSelectedCoffee (coffee);
    };
    return (
        <div className = "coffee-list">
            {filteredCoffees.length >0 ?(
            filteredCoffees.map((coffee) => (
                <div className = "coffee-item"
                key = {coffee.id} 
                onClick = {()=> handleSelectedCoffee(coffee)}>

                    <h2>{coffee.title}</h2>
                    <div className ="image-container">

                    <img src = {coffee.image}  alt = {coffee.title} 
                    className = {selectedCoffee === coffee ? 'selected' : '' }
                        
                    />
                    </div>
                    <p>{coffee.description}</p>
                    </div>
            ))
            ) :(<p>No Coffee data available.</p>)
        } 
    </div>
);
};

export default CoffeeList;