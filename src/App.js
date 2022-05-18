import { render, screen } from '@testing-library/react';
import App from './App.css';
import { Routes, Route, Link } from "react-router-dom";
import {Hot} from "./Pages/Hot";
import {ListMem} from "./Pages/Regular";
import {useSelector, useDispatch} from "react-redux";


export default function App2() {
const dispatch = useDispatch();
const regularphoto = useSelector(state => state.regularphoto);
const hotphoto = useSelector(state => state.hotphoto);

const setRegularPhoto=(regularphoto)=>{
  dispatch({type: "SET_REGULARPHOTO" , payload:(regularphoto)})
}

const setHotPhoto = (hotphoto) => {
  dispatch({type: "SET_HOTPHOTO", payload: hotphoto})
}


  return(
    <div className="App2">
      <div>
        <link to="/hot">Hot</link>
        <link to="/regular">Regular</link>
      </div>
      <Routes>
        <Route path="/hot" element={<Hot/>}/>
        <Route path="/regular" element={<ListMem/>}/>
      </Routes>
    </div>
  );
}