import styled from "styled-components"


const Poster = styled.div`
    width: 45%;
    `;

export default function Movie ({id, posterURL, title, overview, releaseDate}){
    return (
        <Poster>
            <img src={posterURL} />
        </Poster>
    )
}