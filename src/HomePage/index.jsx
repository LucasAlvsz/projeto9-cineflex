import axios from 'axios'
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'

import "./style.css"

export default function HomePage() {
    const [moviesList, setMovieList] = useState([])
    useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
            .then(response => {
                setMovieList(response.data)
            })
            .catch(response => {
                console.log(response.response);
            })
    }, [])

    return (
        <section>
            <h1 className="title">Selecione o filme</h1>
            {moviesList.map(movie => {
                return (
                    <div className="movie" key={movie.id}>
                        <Link to={`/sessoes/${movie.id}`}>
                            <img src={movie.posterURL} alt={movie.title} />
                        </Link>
                    </div>
                )
            })}
        </section>
    )
}