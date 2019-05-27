import React from "react";
import ProductList from "../../components/Products/ProductList";

function Products(props){
   
    return (
        <div>
          <ProductList products = {props.products} productOnClick = {props.productOnClick} />
          <div class="checkoutButton">
            <button class="checkout">Checkout</button>
          </div>
        </div>
    );
}

export default Products;