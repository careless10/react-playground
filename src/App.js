import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'
import { Button } from 'reactstrap';


function App() {
  const [total, setTotal] = useState(0);
  const [data, setData] = useState({})

  useEffect(newCat, [])

  console.log("outside useeffect")
  
  useEffect(() => {
    console.log("Inside useeffect")
  }, [])

  async function newCat(){
    let raw = await fetch('https://thatcopy.pw/catapi/rest/');
    let res = await raw.json();
    setData(res);
  }


  return <div>
    <h1>Total {total}</h1>
    <img src={data.url} width="300"/>
    <Button color="danger">Danger!</Button>
    </div>
}

function Voter(props){
  const [votes, setVotes] = useState(0);

  function voted(){
    props.setTotal(props.total+1);
    setVotes(votes+1)
  }

  // console.log(props.title+" rendered");
  return <div>
    <button onClick={voted}>{props.title}</button>
    <h3>Votes: {votes}</h3>
    
  </div>
}


export default App;

