import {useState} from 'react';
import '../components/styles.css';


const Navbar = ({onSearch})=>{
    const [search, setSearch] = useState ('');

    const handleSubmit = (e)=> {
        e.preventDefault();
       onSearch( search);
    };

    return (
        <nav className = "navbar">
            <form onSubmit ={handleSubmit}>
            <input type = "text" placeholder = "Searching Coffee ..."
            value = {search}
            onChange ={(e) => setSearch(e.target.value
            )}
            />
            <button type = "submit">Search</button>
            </form>
        </nav>
    );
};

export default Navbar;