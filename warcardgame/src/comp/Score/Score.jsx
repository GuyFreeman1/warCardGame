import React from 'react';
import './Score.css';
// import Game from '../Game/Game.jsx';


export default function Score(props) {

    const reTurn=()=>{
      props.return() 
    }

  return (
    <>
       <div class="container3">
<div class="card3">
 <div class="inner-box3" id="card3">
        <div class="card-front3">
          <br />
                    <br />
          <br /><br /><br />
    <div className='a'><h1>{props.playerName} {props.score} {props.finale}</h1></div> 

    
      <button className='btn2' onClick={reTurn}>Again</button>  
      </div>
    </div>
    </div>
    </div>
 </>
  )
}
