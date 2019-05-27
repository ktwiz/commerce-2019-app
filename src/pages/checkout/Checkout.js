import React from "react";
import CartList from '../../components/Cart/CartList';
import './contact.css';


renderCart = (shoppingCart) =>
{
        if(shoppingCart.length > 0) return emptyCartMessage;
        else return <CartList shoppingCart={shoppingCart}  />
};

function Checkout(props){
    const {shoppingCart} = props;
    const emptyCartMessage = "<h2>You've buy nothing, go shopping more ^^</h2>";
    

    return (
        <div className="content">
          {renderCart(shoppingCart)}
        </div>
    );
}

export default Checkout;