import {useState} from "react";
import { useDispatch } from "react-redux";
import {useEffect} from 'react';

export const Hot = () => {
  const [hotphoto, setHotPhoto] = useState();
const dispatch = useDispatch();
 
     
useEffect(()=> {
dispatch({
    type: "SET_HOTPHOTO",
    payload: hotphoto,
})
}, [])
return (
    <div>
      </div>
    );
  };
