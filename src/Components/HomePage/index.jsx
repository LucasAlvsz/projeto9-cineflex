import axios from 'axios'
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'

import "./style.css"

export default function HomePage() {
    const [moviesList, setMovieList] = useState([])
    useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
            .then(({ data }) => setMovieList(data))
            .catch(({ response }) => console.log(response))
    }, [])
    return (
        moviesList.length !== 0
            ? <section>
                <h1 className="title">Selecione o filme</h1>
                {moviesList.map(({ id, posterURL, title }) => {
                    return (
                        <div className="movie" key={id}>
                            <Link to={`/sections/${id}`}>
                                <img src={posterURL} alt={title} />
                            </Link>
                        </div>
                    )
                })}
            </section>
            : <>
                <h1 className="title">Selecione o filme</h1>
                <section className="s-loading">
                    <div className="loading"></div>
                </section >
            </>
    )
}