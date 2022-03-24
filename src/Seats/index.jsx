import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import "./style.css"

export default function Seats() {
    const { idSection } = useParams()
    const [seats, setSeats] = useState([])
    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSection}/seats`)
            .then(({ data }) => {
                console.log(data);
                setSeats(data)
            })
            .catch(response => {
                console.log(response.response);
            })
    }, [])
    return (
        <section>
            <h1 className="title">Selecione o(s) assento(s)</h1>
        </section>
    )
}