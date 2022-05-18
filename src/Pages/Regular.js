import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Mem = [
    {
        title:"Mem 1",
        upvotes:6,
        downvotes:0,
        img:"Studia/projekt-react/mem-serwis/my-app/img/image1.png",
    },
    {
        title:"Mem 2",
        upvotes:6,
        downvotes:0,
        img:"Studia/projekt-react/mem-serwis/my-app/img/image2.png",
    },
    {
        title:"Mem 3",
        upvotes:6,
        downvotes:0,
        img:"Studia/projekt-react/mem-serwis/my-app/img/image3.png",
    },
    {
        title:"Mem 4",
        upvotes:6,
        downvotes:0,
        img:"path/to/image4.png",
    },
    {
        title:"Mem 5",
        upvotes:6,
        downvotes:0,
        img:"Studia/projekt-react/mem-serwis/my-app/img/image5.png",
    },
    {
        title:"Mem 6",
        upvotes:6,
        downvotes:0,
        img:"path/to/image6.png",
    },
    {
        title:"Mem 7",
        upvotes:6,
        downvotes:0,
        img:"Studia/projekt-react/mem-serwis/my-app/img/image7.png",
    },
    {
        title:"Mem 8",
        upvotes:6,
        downvotes:0,
        img:"Studia/projekt-react/mem-serwis/my-app/img/image8.png",
    },
    {
        title:"Mem 9",
        upvotes:6,
        downvotes:0,
        img:"Studia/projekt-react/mem-serwis/my-app/img/image9.png",
    },
    {
        title:"Mem 10",
        upvotes:6,
        downvotes:0,
        img:"Studia/projekt-react/mem-serwis/my-app/img/image10.png",
    },
];

export const ListMem = () => {
    const [regularphoto, setRegularPhoto] = useState([Mem]);
    const dispatch = useDispatch();
    const regularphotos = useSelector(state=>state.regularphotos)


useEffect(()=> {
    dispatch({
        type:"SET_REGULARPHOTO",
        payload: regularphoto,
    })
}, [])
    return(
        <div>
            Memy:
        </div>
    );
};