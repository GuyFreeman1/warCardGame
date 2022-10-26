import React, {useState} from 'react';
import './Game.css';
import Card from '../Crads/Card.jsx';


export default function Game(props) {

  const [index,setIndex]=useState(0);
  const [cpuPoints, setCpuPoints]=useState(0);
  const [playerPoints, setPlayerPoints]=useState(0);


//----------------------------------------------------------------------------------

  const incIndex =()=>{
    let p =playerPoints;
    let c = cpuPoints;
    if(props.cpuDeck[index] > props.playerDeck[index]){ 
      c++ 
      setCpuPoints(c) 
    }else if(props.cpuDeck[index] < props.playerDeck[index]){ 
      p++
      setPlayerPoints(p) 
  };

  let temp = index; 

  temp ++
  setIndex(temp) 
  if(index === 25){
  let countW=0; 
    let points =''; 
    if(cpuPoints >= playerPoints){
      points ='You Lost'
      countW++

    }else if(cpuPoints < playerPoints){
      points='You Won'
      countW++
    }
    props.thePoints(points); 
    props.finish(); 
    props.thefnale(countW) 

  };
  };

//----------------------------------------------------------------------------------  


  const sendCpuCardVal =()=>{
    return props.cpuDeck[index]; 
  };

  const sendPlayerCardVal =()=>{
    return props.playerDeck[index]; 
  };

//----------------------------------------------------------------------------------

  return (
    <>
       <div class="container">
<div class="card">
 <div class="inner-box" id="card">
        <div class="card-front">

       <div className='pc'> <h1>CPU</h1> </div>
        <div className='deck'> <Card cardVal ={sendCpuCardVal}/> </div> 
         <br />
         <br />
         <br />
        <div className='deck'> <Card cardVal ={sendPlayerCardVal}/> </div> 
       <div className='name'> <h1>{props.playerName}</h1> </div>
        <button className='btn' onClick={incIndex}>Next</button>
        
    </div>
    </div>
    </div>
    </div>
    </>
  )
};
