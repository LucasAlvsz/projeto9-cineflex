import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Footer from '../Footer'

import "./style.css"

export default function Seats() {
    const { idSection } = useParams()
    const [seats, setSeats] = useState("")
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
    const { title, movie, day } = seats
    return (
        seats != ""
            ? <section className="seats">

                <h1 className="title">Selecione o(s) assento(s)</h1>
                <div className="seats-container">
                    {seats.seats.map(({ id, name }) => {
                        return (
                            <div className="seat" key={id}>{name}</div>
                        )
                    })}
                </div>
                <div className="status-caption">
                    <span>
                        <div className="status selected"></div>
                        <p>Selecioando</p>
                    </span>
                    <span>
                        <div className="status available"></div>
                        <p>Disponível</p>
                    </span>
                    <span>
                        <div className="status unavailable"></div>
                        <p>Indisponível</p>
                    </span>
                </div>

                <section className="personal-data">
                    <span>
                        <p>Nome do Comprador</p>
                        <input type="text" />
                    </span>
                    <span>
                        <p>CPF do comprador</p>
                        <input type="number" />
                    </span>

                    <button className="reserve">Reservar assento(s)</button>
                </section>
                <span className="margin"></span>

                <Footer
                    title={title}
                    posterURL={movie.posterURL}
                    sectionDay={day.weekday}
                    sectionTime={seats.name}
                />
            </section>
            : <p>Carregando</p>
    )
}