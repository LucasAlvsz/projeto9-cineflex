import { BrowserRouter, Routes, Route } from "react-router-dom"

import "../../assets/css/reset.css"
import "../../assets/css/style.css"

import Header from "../Header"
import HomePage from "../HomePage"
import Sections from "../Sections"
import Seats from "../Seats"
import Sucess from "../Sucess"

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sections/:idMovie" element={<Sections />} />
                    <Route path="/seats/:idSection" element={<Seats />} /> 
                    <Route path="/sucess" element={<Sucess />} /> 
                </Routes>
            </main>
        </BrowserRouter>
    )
}