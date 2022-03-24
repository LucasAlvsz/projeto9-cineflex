import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import "./style.css"

import Footer from '../Footer'

export default function Sections() {
    const { idFilme } = useParams()
    const [moviesSections, setMovieSections] = useState("")
    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
            .then(({ data }) => setMovieSections(data))
            .catch(({ response }) => console.log(response))
    }, [])
    const { title, posterURL } = moviesSections
    return (
        moviesSections != ""
            ? <section>
                <h1 className="title">Selecione o horário</h1>
                {moviesSections.days.map(({ id, weekday, date, showtimes }) => {
                    return (
                        <section className="list" key={id}>
                            <h3 className="title-section">{weekday} - {date}</h3>
                            <div className="show-times">
                                {showtimes.map(({ id, name }) => {
                                    return (
                                        <Link to={`/sessao/${id}`} key={id}>
                                            <div className="show-time">{name}</div>
                                        </Link>
                                    )
                                })}
                            </div>

                        </section>
                    )
                })}
                <span className="margin"></span>
                <Footer
                    title={title}
                    posterURL={posterURL}
                    section=""
                />
            </section>
            :
            <p>carregando</p>
    )
}