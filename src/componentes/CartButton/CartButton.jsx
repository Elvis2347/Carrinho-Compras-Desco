import React, { useContext } from 'react';
import { BsCart4 } from 'react-icons/bs';

import './CartButton.css'
import AppContext from '../../context/AppContext';

function CartButton() { 
    const {cartItems, isCartVisible, setIsCartVisible} = useContext(AppContext);
    return (
        <button 
        type="button" 
        className='cart-button'
        onClick={ () => setIsCartVisible(!isCartVisible)}
        >
            <BsCart4 />
            {cartItems.length > 0 && <spam className="cart-status">{cartItems.length}</spam>}
            
        </button>
    );
}

export default CartButton;
