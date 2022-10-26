import React from 'react';
import './Login.css';
import { useState } from 'react';
import logoWar from '../Login/logoWar.png';


export default function Login(props) {

  const [name,setName]=useState('');

  return (
    <>    


    <div class="container2">

        <div class="card2">
            <div class="inner-box2" id="card2">
                <div class="card-front2">
    <br /><br />
    <br /><br />
    <br /><br />
    <br /><br />
    <br /><br />
    <br /><br />
    <br />
      <input class="lvl-btn" onChange={(e)=>{setName(e.target.value) }} type="text" placeholder='Enter Your Name'/><br /> 
  
       
      <br />
      <br />

      <button class="lvl-btn" onClick={()=>{props.valid(name)}}>Start</button>
    

      <img src={logoWar} height={'280px'} />
    </div>
    </div>
    </div>

    </div>

    </>
  )
}