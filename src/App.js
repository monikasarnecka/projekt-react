import { render, screen } from "@testing-library/react";
//import App from './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Hot } from "./Pages/Hot";
import { ListMem } from "./Pages/Regular";
//import {useSelector, useDispatch} from "react-redux";
import React, { useEffect, useState } from "react";
import { Mem } from "./Pages/Regular";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ButtonItem } from "./Pages/Regular";


// export default function App2() {
// const dispatch = useDispatch();
// const regularphoto = useSelector(state => state.regularphoto);
// const hotphoto = useSelector(state => state.hotphoto);

// const setRegularPhoto=(regularphoto)=>{
//   dispatch({type: "SET_REGULARPHOTO" , payload:(regularphoto)})
// }

// const setHotPhoto = (hotphoto) => {
//   dispatch({type: "SET_HOTPHOTO", payload: hotphoto})
// }

//   return(
//     // <div className="App2">
//     //   <div>
//     //     <link to="/hot">Hot</link>
//     //     <link to="/regular">Regular</link>
//     //   </div>
//     //   <Routes>
//     //     <Route path="/hot" element={<Hot/>}/>
//     //     <Route path="/regular" element={<ListMem/>}/>
//     //   </Routes>
//     // </div>
//     <div>
//       Hello
//     </div>
//   );
// }

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






