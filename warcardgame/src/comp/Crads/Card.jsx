import React from 'react'
import './Cards.css';
import red from '../Game/red.png';
// import Game from '../Game/Game.jsx';



export default function Card(props) {
  return (
    <div>
       
        <h1>{props.cardVal()}</h1>
        <img src={red} height={'220px'} width={'180px'}/>
        
    </div>
  )
}