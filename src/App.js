import React from 'react';
import logo from './logo.svg';
import './App.css';

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
//Shooping list is a React component class o React component type
class ShoppingList  extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          {/* estos son 'elementos', en babel se puede ver como cambian
          en tiempo de construccion a React.CreateElement("ul", null, null) o ("li",null, Instagram")*/}
          <li>Instagram</li> 
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

export default ShoppingList ;
