import styled from "styled-components"
import { useParams, Link } from 'react-router-dom';



const Poster = styled.div`
    width: 45%;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    height: 210px;
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

export default function Movie ({id, posterURL, title, overview, releaseDate}){

    const {idFilme} = useParams();
    console.log(idFilme);

    return (
        <Poster>
            <img src={posterURL} />
        </Poster>
    )
}