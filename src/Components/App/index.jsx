import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

import "../../assets/css/reset.css"
import "../../assets/css/style.css"

import Header from "../Header"
import HomePage from "../HomePage"
import Sections from "../Sections"
import Seats from "../Seats"
import Sucess from "../Sucess"

export default function App() {
    const [reservationData, setReservationData] = useState("")
    console.log(reservationData);
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sections/:idMovie" element={<Sections />} />
                    <Route path="/seats/:idSection"
                        element={
                            <Seats reservationDataUpdate={(userData) => setReservationData(userData)} />} />
                    <Route path="/sucess" element={<Sucess reservationData={reservationData} />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}