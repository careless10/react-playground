import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'


function App() {
  const [total, setTotal] = useState(0)

  console.log("App rendered")
  return <div>
    <h1>Total {total}</h1>
    <Voter total={total} setTotal={setTotal} title="للي يستحق" />
    <Voter total={total} setTotal={setTotal} title="مشرف" />
    <Voter total={total} setTotal={setTotal} title="ولد عمي" />
    </div>
}

function Voter(props){
  const [votes, setVotes] = useState(0);

  function voted(){
    props.setTotal(props.total+1);
    setVotes(votes+1)
  }

  console.log(props.title+" rendered");
  return <div>
    <button onClick={voted}>{props.title}</button>
    <h3>Votes: {votes}</h3>
    
  </div>
}


export default App;

