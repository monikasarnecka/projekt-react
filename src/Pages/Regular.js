import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
//import { useDispatch } from 'react-redux';
//import { useSelector } from 'react-redux';


export const Mem =  [
    {
        title:"Mem 1",
        upvotes:6,
        downvotes:0,
        img:"https://gfx.stylzycia.radiozet.pl/var/radiozetstylzyci/storage/images/magia/wrozby/symbolika-zwierzat-co-oznaczaja-zwierzeta-mocy-31501/9333267-1-pol-PL/Symbolika-zwierzat-co-oznaczaja-zwierzeta-mocy_article.jpg",
    },
    {
        title:"Mem 2",
        upvotes:6,
        downvotes:0,
        img:"https://i.wpimg.pl/985x0/m.fotoblogia.pl/comedy-wildlife-7-afb32d574cef7b.jpg",
    },
    {
        title:"Mem 3",
        upvotes:6,
        downvotes:0,
        img:"https://www.kobieta.pl/media/cache/default_view/uploads/media/default/0003/19/ogladaj-live-zycie-zwierzat-dla-relaksu.jpeg",
    },
    {
        title:"Mem 4",
        upvotes:6,
        downvotes:0,
        img:"https://www.national-geographic.pl/media/cache/slider_big/uploads/media/default/0014/49/najdluzej-zyjace-zwierzeta-poznaj-rekordy-dlugowiecznosci-u-zwierzat.jpeg",
       
    },
    {
        title:"Mem 5",
        upvotes:6,
        downvotes:0,
        img:"https://przytuliskochojnice.pl/wp-content/uploads/2017/03/pet_rescu_slide2.jpg",
    },
    {
        title:"Mem 6",
        upvotes:6,
        downvotes:0,
        img:"https://ocdn.eu/pulscms-transforms/1/aBNk9kpTURBXy84NzNiMDgxYzAwMGViMmJkYWQzNWZlZGU5NjU2YjAzMS5qcGeTlQMAzQHEzQrqzQYkkwXNAxTNAbyTCaY0MGZlYjgGgaEwAQ/niewidoma-wydra-uciekla-z-azylu-dla-dzikich-zwierzat.jpg",
    },
    {
        title:"Mem 7",
        upvotes:6,
        downvotes:0,
        img:"https://naukawpolsce.pl/sites/default/files/styles/strona_glowna_slider_750x420/public/201710/15707127_15707289.jpg?itok=-FlRwW5I",
    },
    {
        title:"Mem 8",
        upvotes:6,
        downvotes:0,
        img:"https://perso.in/wp-content/uploads/2020/05/andre-mouton-GBEHjsPQbEQ-unsplash.jpg",
    },
    {
        title:"Mem 9",
        upvotes:6,
        downvotes:0,
        img:"https://animalistka.pl/wp-content/uploads/2019/07/slon7-1-945x630.jpg",
    },
    {
        title:"Mem 10",
        upvotes:6,
        downvotes:0,
        img:"https://www.wroclaw.pl/files/cmsdocuments/28155494/630x350/Gdzie-kupic-domowe-zwierze.jpg",
    },
];

// export const ListMem = () => {
//     const [regularphoto, setRegularPhoto] = useState([Mem]);
//     const dispatch = useDispatch();
//     const regularphotos = useSelector(state=>state.regularphotos)


// useEffect(()=> {
//     dispatch({
//         type:"SET_REGULARPHOTO",
//         payload: regularphoto,
//     })
// }, [])
//     return(
//         <div>
           
//            {regularphoto}
//         </div>
//     );
// };