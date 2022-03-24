import { BrowserRouter, Routes, Route } from "react-router-dom"

import "../assets/css/reset.css"
import "../assets/css/style.css"

import Header from "../Header"
import HomePage from "../HomePage"
import Sections from "../Sections"
import Seats from "../Seats"

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/filme/:idFilme" element={<Sections />} />
                    {<Route path="/sessao/:idSection" element={<Seats />} /> }
                </Routes>
            </main>
        </BrowserRouter>
    )
}