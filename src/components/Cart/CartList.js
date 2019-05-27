import React from "react";
import ProductItem from './CartItem';

renderFooter = (shoppingCart) =>
{
        if(shoppingCart.length > 0){
            const totalPrize = shoppingCart.reduce((total, item) => {
                total = total + item.prize * item.quantity;
                return total;
        }
        else return <CartList shoppingCart={shoppingCart}  />
};

getTotal = (shoppingCart,itemQuan)

function CartList(props){   
    const {shoppingCart} = props;


    return (     
      <ul>
        {shoppingCart.map(p => {
              return <CartItem key={p.id} cart={p} />
          })}
      </ul>      
    );
}

export default CartList;