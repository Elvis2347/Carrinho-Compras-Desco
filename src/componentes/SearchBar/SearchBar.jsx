import React, {useState, useContext} from "react";
import { BsSearch } from 'react-icons/bs';
import './SearchBar.css';
import fetchProduto from "../../api/fetchProduto";
import AppContext from "../../context/AppContext";

function SearchBar() {

    const {setProdutos, setLoading} = useContext(AppContext)
    const [searchValue,setSearchValue] = useState('');


    const handleSearch = async (event) => {
        event.preventDefault();
        setLoading(true);

        const produtos = await fetchProduto(searchValue);
        
        setProdutos(produtos);
        setLoading(false);
        setSearchValue('');

    };

    return (
        <form className="search-bar" onSubmit={handleSearch}>
            <input 
                type="search"
                value={searchValue}
                placeholder="Buscar produtos" 
                className="search-input"
                onChange={ ({ target }) => setSearchValue(target.value)}
                required
                />
                
            <button type="submit" className="search-button">
               <BsSearch />
            </button>
        </form>
    );
}

export default SearchBar;