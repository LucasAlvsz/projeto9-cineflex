import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import "./style.css"

export default function Sections() {
    const { idFilme } = useParams()
    const [moviesSections, setMovieSections] = useState([])
    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
            .then(({ data }) => {
                console.log(data.days);
                setMovieSections(data.days)
            })
            .catch(response => {
                console.log(response.response);
            })
    }, [])
    return (
        <section>
            <h1 className="title">Selecione o horário</h1>
            {moviesSections.map(({ id, weekday, date, showtimes }) => {
                return (
                    <section className="sections" key={id}>
                        <h3 className="title-section">{weekday} - {date}</h3>
                        <div className="show-times">
                            {showtimes.map(({ id, name }) => <div className="show-time" key={id}>{name}</div>)}
                        </div>
                    </section>
                )
            })}
        </section>
    )
}