import React from 'react';

import NavBar from "./components/NavBar";
import Banner from './components/Banner';
import Page from './pages/Page';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Contact from './pages/contact/Contact';

import logo from './logo.svg';
import './App.css';


/*
function MyHello(props){
  return <h1>Hello : {props.prop1} and {props.prop2}</h1>;
}

class MyButton extends React.Component{
  state ={"active" : this.props.checked}
  onBtnClick = () =>{
    this.setState({"active": !this.state.active})
  }
  render(){
    return <button onClick={this.onBtnClick}>
    {this.state.active ? this.props.prop1 : this.props.prop2}
    </button>
  }
}
*/
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
/*
function App() {
  return (
    <div className="App">
      <MyHello prop1="This is prop1" prop2="This is prop2" />
      <MyButton checked />
    </div>
  );
}
*/

/*
function App() {
  return (
    <div className="App">
      <NavBar cartLength = "5" />
    </div>
  );
}
*/

class App extends React.Component{
  state = {    
    activePage: "home",
    productDetail: null,
    shoppingCart: [],
    successShoppingCart: [],
    products: [
      {
        id: "1",
        name: "iPhone6",
        price: 650
      },
      {
        id: "2",
        name: "iPhone6 Plus",
        price: 700
      },
      {
        id: "3",
        name: "iPhone7",
        price: 750
      },
      {
        id: "4",
        name: "iPhone7 Plus",
        price: 800
      }
    ],
    menuMapper:[
      {
        item_cd : "home",
        item_name: "Trang chu"        
      },
      {
        item_cd : "products",
        item_name: "San pham"        
      },
      {
        item_cd : "contact",
        item_name: "Lien he"        
      }
    ]
  };

  MenuOnClick = (activePage) => {
    const newState = {...this.state, activePage};
    this.setState(newState);
  };

  ProductOnClick = (id) => {    
    //const productById = id => product => product.id === id;
    const newShoppingCart = [...this.state.shoppingCart];
    const productToAdd = this.state.products.find(product => product.id === id);    
    const sameProductInCart = this.state.shoppingCart.find(product => product.id === id);
    
    if (sameProductInCart) { 
      sameProductInCart.quantity++;
    } else {
      productToAdd.quantity = 1;
      newShoppingCart.push(productToAdd);
    }    
    const newState = {...this.state, shoppingCart: newShoppingCart};   
    this.setState(newState);    
  };

  render(){
    const pageMapper = {
      home: <Home />,
      contact: <Contact />,
      products: (
        <Products 
          products={this.state.products} 
          productOnClick = {this.ProductOnClick} />
      ),
    };
    
    return (
      <div className="App">
        <Banner title="My Shopping Website" />
        <NavBar 
          menuOnClick = {this.MenuOnClick}
          menu={this.state.menuMapper} cartLength={this.state.shoppingCart.length} />
        <Page 
          title = {this.state.menuMapper.filter(m => m.item_cd === this.state.activePage)[0].item_name} 
          pageComp = {pageMapper[this.state.activePage]} />
      </div>
    )    
  };
}

export default App;
