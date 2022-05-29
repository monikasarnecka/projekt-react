import { render, screen } from "@testing-library/react";
import { Routes, Route, Link } from "react-router-dom";
import { Hot } from "./Pages/Hot";
import { ListMem } from "./Pages/Regular";
import React, { useEffect, useState } from "react";
import { Mem } from "./Pages/Regular";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ButtonItem } from "./Pages/Regular";


export default function App() {
  const [dogImages, setDogImages] = useState(Mem);
  

  useEffect(() => {}, []);

  return (
    <div>
      Dogs kkk
      {dogImages.map((image) => (
        <MemComponent image={image} upVoteClick={console.log('test') } />
        
      ))}  
    </div>
    
  );
}


function MemComponent(props) {
  return (
    <div class="MemContainer">
      <div class="MemTitle">{props.image.title}</div>
      <img key={props.image.img} src={props.image.img} />
      <div>
        <div>Upvotes: {props.image.upvotes}  <FontAwesomeIcon icon={faArrowUp} onClick={props.upVoteClick}/></div>
        <div>Downvotes: {props.image.downvotes} <FontAwesomeIcon icon={faArrowDown} /></div>
    </div>
  
    </div>
  );
}






