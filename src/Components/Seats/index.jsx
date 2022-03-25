import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Footer from '../Footer'

import "./style.css"

export default function Seats() {
    const { idSection } = useParams()
    const [seats, setSeats] = useState("")
    const [seatsIdList, setSeatsIdList] = useState([])
    const [userName, setUserName] = useState("")
    const [userCpf, setUserCpf] = useState("")
    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSection}/seats`)
            .then(({ data }) => setSeats(data))
            .catch(response => console.log(response.response))
    }, [])
    const { movie, day } = seats
    return (
        seats !== ""
            ? <section className="seats">

                <h1 className="title">Selecione o(s) assento(s)</h1>
                <div className="seats-container">
                    {seats.seats.map(({ id, name, isAvailable }) => {
                        return (
                            isAvailable
                                ? <div className={`seat ${seatsIdList.includes(name) ? "selected" : "available"}`} key={id}
                                    onClick={() => {
                                        console.log(seatsIdList)
                                        seatsIdList.includes(name)
                                            ? setSeatsIdList(() => {
                                                let seatsIdListLog = seatsIdList
                                                seatsIdListLog.splice(seatsIdList.indexOf(name), 1)
                                                return seatsIdListLog
                                            })
                                            : setSeatsIdList([...seatsIdList, name])
                                    }}>
                                    {name}
                                </div>
                                : <div className="seat unavailable" key={id}>{name}</div>
                        )
                    })}
                    {console.log(seatsIdList)}
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

                <section className="user-data">
                    <span>
                        <p>Nome do Comprador</p>
                        <input type="text" placeholder="Digite seu nome..."
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </span>
                    <span>
                        <p>CPF do comprador</p>
                        <input type="number" placeholder="Digite seu CPF..."
                            onChange={(e) => setUserCpf(e.target.value)}
                        />
                    </span>
                    <Link to={`/sucess`}>
                    <button className="reserve"
                        onClick={() => setUserCpf()}>
                        Reservar assento(s)
                    </button>
                    </Link>
                </section>
                <span className="margin"></span>

                <Footer
                    title={movie.title}
                    posterURL={movie.posterURL}
                    sectionDay={day.weekday}
                    sectionTime={seats.name}
                />
            </section>
            : <p>Carregando</p>
    )
}