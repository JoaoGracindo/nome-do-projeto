import react from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TopBar from "../TopBar/TopBar";
import InitialPage from "../InitialPage/InitialPage";

export default function App (){
   return( <>
                <BrowserRouter>
                    <TopBar />
                    <Routes>
                        <Route path='/' element={<InitialPage />} />
                    </Routes>
                </BrowserRouter>
            </>
    )
}

