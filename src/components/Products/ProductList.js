import React from "react";
import ProductItem from './ProductItem';
import './product.css';

function ProductList(props){   
    const {products} = props;
    return (
        <div className="page products">        
        <div className="content">
          {products.map(p => {
              return <ProductItem key={p.id} product={p} productOnClick = {props.productOnClick} />
          })}
        </div>
      </div>      
    );
}

export default ProductList;