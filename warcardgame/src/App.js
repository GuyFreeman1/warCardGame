import './App.css';
import Game from './comp/Game/Game.jsx';
import Login from './comp/Login/Login.jsx';
import Score from './comp/Score/Score.jsx';
import { useState } from 'react';



function App() {


 const [player,setPlayer]=useState({}) 
 const [pages,setPages]=useState(0) 
 const [cpuDeck,setCpuDeck]=useState([]) 
 const [playerDeck,setPlayerDeck]=useState([])

//-------------------------------------------------------------------------------------------


  
// }

const gameReturn=()=>{ 
  setPages(1); 
  createDeck();
}

 const finish=()=>{ 
  setPages(2)
 }

 //------------------------------------------------------------------------------------------



const validName =(name)=>{
 if (name.length > 0){
  setPlayer({fullName: name }) 
  setPages(1); 
  createDeck(); 
}else{
  alert('Name Cannot Be Empty');
 }
};

 //------------------------------------------------------------------------------------------




const createDeck =()=>{
  let temp =[]; 
  for(let i = 1, cardValue = 1; i <= 52; i++){ 
    temp.push(cardValue); 
    if( i %4 === 0 ){ 
      cardValue++;
    }
  }

  let rnd; 
  let compDeck=[]; 
  let playrDeck=[]; 


  for(let i = 0; i < 26; i++){ 

    rnd = Math.floor(Math.random()* temp.length); 
    compDeck.push(temp[rnd]); 
    temp.splice(rnd,1); 


    rnd = Math.floor(Math.random()* temp.length); 
    playrDeck.push(temp[rnd]); 
    temp.splice(rnd,1); 
  }
  setCpuDeck([...compDeck]) 
  setPlayerDeck([...playrDeck]); 
};



 //------------------------------------------------------------------------------------------

 const [point,setPoint]=useState('');

 const winPoints =(result)=>{ 
  setPoint(result) 
 }

 //------------------------------------------------------------------------------------------
 
 
 const [scores,setScores]=useState({}); 

const finalScore=(score )=>{ 
  setScores({final: score +1}) 
}
 
 
 //------------------------------------------------------------------------------------------


const switchPages =()=>{
  if(pages === 0){ 
    return <Login valid ={validName}/>
  }
  else if(pages === 1){
    return <Game
    thePoints={winPoints} 
    thefnale={finalScore} 
    finish={finish} 
     playerName={player.fullName} 
     cpuDeck={cpuDeck} 
     playerDeck={playerDeck} 
     />
  }
  else if(pages === 2){
    return <Score 
    score={point} 
    playerName={player.fullName} 
    return={gameReturn} 
    finale={scores.final} 
    />

  }
};
 //------------------------------------------------------------------------------------------


  return (
    <div className="App">

    {switchPages()}

    </div>
  );
}

export default App;