import { BrowserRouter, Routes, Route } from "react-router-dom"

import "../assets/css/reset.css"
import "../assets/css/style.css"

import Header from "../Header"
import HomePage from "../HomePage"

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sessoes/:idFilme" element={<HomePage />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}