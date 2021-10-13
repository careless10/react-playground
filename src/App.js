import logo from './logo.svg';
import './App.css';


function App() {
  let dishes = [ 'Sour Dough', 'Baryani', 'Pizza', 'Ribs', 'Salmon' ];

  return <div>
    {dishes.map(x => <p>{x}</p>)}
  </div>;
}




export default App;

