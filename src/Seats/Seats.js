import styled from "styled-components"
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";



const Main = styled.div`
position: fixed;
overflow-y: scroll;
top: 70px;
margin-left: 5vw;
margin-right: 5vw;
width: 90vw;
bottom: 120px;


`;


const Footer = styled.div`
position: fixed;
width: 100%;
height: 110px;
left: 0px;
bottom: 0px;
background-color: #DFE6ED;
border: 1px solid #9EADBA;
display:flex;
align-items: center;

& img{
    box-sizing:border-box;
    height: 70px;
    width: 64px;
    border: 8px solid #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin-left: 10px;
    margin-right: 15px;

}

& span{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
}
`;

const SessionTitle = styled.div`
        width: 100%;
        display:flex;
        align-items:center;
        justify-content:center;
        letter-spacing: 0.04em;
        color: #293845;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        height: 110px;
`;

const Assentos = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left:13px;


`;

const Assento = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 1px solid ${props => props.cor ? '#808F9D' : '#F7C52B'};
    background-color: ${props => props.cor ? '#C3CFD9' : '#FBE192'};
    display:flex;
    align-items: center;
    justify-content: center;
    color: #000000;
    font-weight: 400;
    font-size: 11px;
    margin-right: 15px;
    margin-bottom: 22px;
`;

const Legenda = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    

`;


export default function Seats(){

    const {idSessao} = useParams();

    const [session, setSession] = useState(false);

    useEffect(() =>{
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        .then(e => setSession({...e.data}))
    }, []);




    if(!session){
        return(
            <SessionTitle>Agueardando o carregamento ...</SessionTitle>
        )


    }
        console.log(session)
        

        return(
            <>
                <Main>
                    <SessionTitle>Selecione o(s) assento(s)</SessionTitle>
                    <Assentos>
                        {session.seats.map((v) => <Assento cor={v.isAvailable}>{v.name}</Assento>)}
                    </Assentos>
                    <Legenda>
                        <div>
                            <Assento>
                            </Assento>
                            <div>
                                Selecionado
                            </div>
                        </div>

                        <div>
                            <Assento cor={true}>
                            </Assento>
                            <div>
                                Disponível
                            </div>
                        </div>

                        <div>
                            <Assento>
                            </Assento>
                            <div>
                                Indisponível
                            </div>
                        </div>
                    </Legenda>
                </Main>
                <Footer>
                    <img src={session.movie.posterURL} />
                    <div>
                        <span>{session.movie.title}</span>
                        <div>{session.day.weekday} - {session.name}</div>
                    </div>

                </Footer>
            </>
        )
    

}