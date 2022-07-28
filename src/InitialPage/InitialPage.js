import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Movie from "../Movie/Movie";


const Main = styled.div`
    position: absolute;
    top: 70px;
    margin-left: 5vw;
    margin-right: 5vw;
    width: 90vw;

    & > div{
        width: 100%;
        display:flex;
        align-items:center;
        justify-content:center;
    }

    & > :first-child{
        letter-spacing: 0.04em;
        color: #293845;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        height: 110px;
    }

    & :nth-child(2){
        justify-content:space-between;
        flex-wrap:wrap;
    }

    a{
        width: 45%;
        height: 210px;
    }

`;

const Poster = styled.div`
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    height: 100%;
    padding: 8px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        box-sizing: border-box;
        width: 95%;
        height: 95%;

    }
    `;


export default function InitialPage (){
    const [movieList, setMovieList] = useState([])
    useEffect(() =>{
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
        promise.then(value => {
            setMovieList([...value.data]);
        })
        
    },[])



    return(
        <Main>
            <div>
                Selecione o filme
            </div>
            <div>
                {movieList.map(value => 
                    <Link to={`/sessoes/${value.id}`} key={value.id}>
                        <Poster>
                            <img src= {value.posterURL}/>
                        </Poster>
                    </Link>)}
            </div>

        </Main>
    )
}
