import React from "react";



function ProductItem(props){
   
    const {key,product} = props;

    return (
        <div className="product">
        <h3>{product.name}</h3>
        <span>{product.prize}</span>
        <button className="add" onClick={() => {props.productOnClick(product.id)}}>Add to cart</button>
        </div>
    );
}


export default ProductItem;