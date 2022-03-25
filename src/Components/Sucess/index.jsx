import { Link } from 'react-router-dom'

import "./style.css"

export default function Sucess({ reservationData }) {
    const { ids, name, cpf, movieTitle, day, time } = reservationData
    return (
        reservationData !== ""
            ? <section className="sucess">
                <div className="infos-container">
                    <h2>Pedido feito<br /> com sucesso! </h2>
                    <div className="infos">
                        <h4>Filme e sessão</h4>
                        <p>{movieTitle}</p>
                        <p>{day} - {time}</p>
                    </div>
                    <div className="infos">
                        <h4>Ingressos</h4>
                        {ids.map(id => <p key={id}>Assento {id}</p>)}
                    </div>
                    <div className="infos">
                        <h4>Comprador</h4>
                        <p>{name}</p>
                        <p>{cpf}</p>
                    </div>
                </div>
                <Link to="/" className="link">
                    <button>Voltar para a Home</button>
                </Link>
            </section>
            : ""
    )

}