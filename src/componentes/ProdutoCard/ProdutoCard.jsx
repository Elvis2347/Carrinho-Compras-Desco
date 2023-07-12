import React, { useState } from "react";
import propTypes from 'prop-types';
import { BsCartCheck } from "react-icons/bs";

import './ProdutoCard.css';
import formatCurrency from "../../util/formatCurrency";
import AppContext from '../../context/AppContext';

function ProdutoCard({ data }) {

    const {title, thumbnail, price} = data;
    const {cartItems, setCartItem} = useState(AppContext);

    const handleAddCart = () => setCartItem([...cartItems, data]);

    return(
        <section className="produto-card">
            
            <img 
            src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} 
            alt="produto" 
            className="card-image" 
            />

            <div className="card-infos">
                <h2 className="card-price">{formatCurrency(price, 'BRL')}</h2>
                <h2 className="card-title">{title}</h2>
            </div>

            <button 
            type="button" 
            className="button-add-card"
            onClick={ handleAddCart }>
                <BsCartCheck />
            </button>

        </section>
    )
}

export default ProdutoCard;

ProdutoCard.prototype = {
    data: propTypes.shape({}),
}.isRequired;
