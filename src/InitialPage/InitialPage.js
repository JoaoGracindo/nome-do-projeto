import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function InitialPage (){
    const [movieList, setMovieList] = useState([])
    useEffect(() =>{
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
        promise.then(value => {
            setMovieList([...value.data]);
        })
        
    },[])

    function Movie ({id, posterURL, title}){
        return(
            <div>
                <img src={posterURL} />
            </div>
        )
    }


    return(
        <>
            {movieList.map(value => <Movie {...value} />)}
        </>
    )
}