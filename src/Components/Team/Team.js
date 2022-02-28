import React,{useState} from 'react'
import "./Team.css"
import card from "../../assets/images/card.png"
import files from '../../assets/cards/cards.json';

function Team({setSelectedImageId}) {
  var data = require('../../assets/cards/cards.json');
  data.map(img => console.log("img:"+img.name))
  console.log("files:"+data);

  const handleClick = () => {

  }

  return (
    <div className="team-container">
        <div className="team">
            <div className="cards">{data && data.map(pic => (
              
               <img className="img-class" onClick={()=>{setSelectedImageId(pic.id)}} key={pic.id} src={ require(`../../assets/cards/${pic.name}`)} alt="img"/>
            ))}
               
              
            </div>
        </div>

    </div>
  )
}

export default Team;