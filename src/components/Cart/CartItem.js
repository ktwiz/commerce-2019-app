import React from "react";

function CartItem(props){
   
    const {cart} = props;

    return (
      <li className="product-item" id={cart.id}>
        <span>{cart.name}</span>
        <span>{cart.prize}USD</span>
        <input className="quantity" type="number" value={item.quantity}/>
        <button className="del">X</button>
      </li>
    );
}


export default CartItem;