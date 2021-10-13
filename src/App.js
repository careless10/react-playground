import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'


function App() {
  const [data, setData] = useState([])

  return <div className="App">
    <div className="container">
      <h3>My Items</h3>
      <input />
      <button>Add Item!</button>
      <div className="items-list">
        <p>Latte</p>
        <p>Mocha</p>
      </div>
    </div>
  </div>;
}




export default App;

