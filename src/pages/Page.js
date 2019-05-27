import React from "react";
import "./page.css";

function Page(props){
    /* Dua mapper chung voi menu
    const pageRouter = [
        {pg_cd = "home", pg_content = <Home />},
        {pg_cd = "products", pg_content = <Products />},
        {pg_cd = "contact", pg_content = <Contact />},
    ]
    */
    return (
        <div className="cart transition is-open">
          <h1>{props.title}</h1>
          {props.pageComp}
        </div>
    );
}

export default Page;