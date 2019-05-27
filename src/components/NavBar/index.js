import React from "react";
import "./index.css";

function NavBar(props){
    const cartLength = props.cartLength;
/* My code --> Not working
    return (
        <nav>
            <ul>            
            {props.menu.map(e => (
                <li className="nav-item" onClick ={props.menuOnClick(e.item_cd)} >{e.item_name}</li>
            ))}
            </ul>           
            <span className="shopping-cart">Cart ({cartLength})</span> 
        </nav>
    );
    */

   return (
    <nav>
        <ul>            
        {props.menu.map(e => (
            <li className="nav-item" onClick ={() => {props.menuOnClick(e.item_cd)}}>{e.item_name}</li>
        ))}
        </ul>           
        <span className="shopping-cart">My Cart: ({cartLength})</span> 
    </nav>
);
}

export default NavBar;