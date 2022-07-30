import react from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TopBar from "../TopBar/TopBar";
import InitialPage from "../InitialPage/InitialPage";
import Movie from "../Movie/Movie";
import Seats from '../Seats/Seats'

export default function App (){
   return( <>
                <BrowserRouter>
                    <TopBar />
                    <Routes>
                        <Route path='/' element={<InitialPage />} />
                        <Route path="/sessoes/:idFilme" element={<Movie />} />
                        <Route path="/assentos/:idSessao" element={<Seats />} />
                    </Routes>
                </BrowserRouter>
            </>
    )
}


//  () =>{
//     axios
//     .get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`)
//     .then()


