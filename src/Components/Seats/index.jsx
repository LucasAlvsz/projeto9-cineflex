import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Footer from '../Footer'

import "./style.css"

export default function Seats() {
    const { idSection } = useParams()
    const [seats, setSeats] = useState("")
    const [seatsIdList, setSeatsIdList] = useState([])
    const [userData, setUserData] = useState({ userName: "", cpf: "" })
    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSection}/seats`)
            .then(({ data }) => setSeats(data))
            .catch(response => console.log(response.response))
    }, [])
    function maskCpf(cpf) {
        return cpf
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    }
    const { movie, day } = seats
    let navigate = useNavigate()
    function userDataValidation(e) {
        e.preventDefault()
        if (seatsIdList !== []) {
            const reservationData = {
                ids: seatsIdList,
                name: userData.userName,
                cpf: userData.cpf
            }
            axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", reservationData)
                .then(() => {
                    console.log("deu bom")
                    let seatsNumbersList = []
                    seats.seats.map(({ id, name }) => {
                        if (seatsIdList.includes(id))
                            seatsNumbersList.push(name)
                    })
                    navigate("../success", { state: { userData, seats, seatsNumbersList } })
                })
                .catch(err => {
                    console.log(err)
                    return false
                })


            // return { ids: seatsIdList, name: userName, cpf: userCpf, movieTitle: movie.title, day: day.weekday, time: seats.name }
        }
        return false
    }
    return (
        seats !== ""
            ? <section className="seats">

                <h1 className="title">Selecione o(s) assento(s)</h1>
                <div className="seats-container">
                    {seats.seats.map(({ id, name, isAvailable }) => {
                        return (
                            isAvailable
                                ? <div
                                    className={`seat ${seatsIdList.includes(id) ? "selected" : "available"}`}
                                    key={id}
                                    onClick={() => {
                                        seatsIdList.includes(id)
                                            ? setSeatsIdList(() => {
                                                let seatsIdListLog = seatsIdList.filter(idlog => idlog !== id)
                                                return seatsIdListLog
                                            })
                                            : setSeatsIdList([...seatsIdList, id])
                                    }}>
                                    {name < 10
                                        ? "0" + name
                                        : name
                                    }
                                </div>
                                : <div
                                    className="seat unavailable"
                                    key={id}
                                    onClick={() => alert("Assento Indisponível!")}>
                                    {name < 10
                                        ? "0" + name
                                        : name
                                    }
                                </div>
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

                <section className="user-data">
                    <form onSubmit={userDataValidation}>
                        <span>
                            <p>Nome do Comprador</p>
                            <input type="text" required placeholder="Digite seu nome..."
                                onChange={(e) => setUserData({ ...userData, userName: e.target.value })}
                            />
                        </span>
                        <span>
                            <p>CPF do comprador</p>
                            <input type="text" required placeholder="Digite seu CPF..." maxLength={14}
                                onChange={(e) => {
                                    e.target.value = maskCpf(e.target.value)
                                    setUserData({ ...userData, cpf: e.target.value })
                                }}
                            />
                        </span>

                        <button className="reserve" type="submit"
                        >
                            Reservar assento(s)
                        </button>
                    </form>
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