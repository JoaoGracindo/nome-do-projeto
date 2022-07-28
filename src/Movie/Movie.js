import styled from "styled-components"
import { useParams, Link } from 'react-router-dom';



export default function Movie ({id, posterURL, title, overview, releaseDate}){

    const {idFilme} = useParams();
    console.log(idFilme);

    return (
        <>
            <img src={posterURL} />
        </>
    )
}