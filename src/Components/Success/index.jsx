import { Link, useLocation } from 'react-router-dom'

import "./style.css"

export default function Success() {
    const location = useLocation()
    const {
        userData: { userName, cpf },
        seats: {
            day: { date },
            movie: { title },
            name,
        },
        seatsNumbersList,
    } = location.state

    return (
        <section className="success">
            <div className="infos-container">
                <h2>Pedido feito<br /> com sucesso! </h2>
                <div className="infos">
                    <h4>Filme e sessão</h4>
                    <p>{title}</p>
                    <p>{date} - {name}</p>
                </div>
                <div className="infos">
                    <h4>Ingressos</h4>
                    {seatsNumbersList.map(id => <p key={id}>Assento {id}</p>)}
                </div>
                <div className="infos">
                    <h4>Comprador</h4>
                    <p>{userName}</p>
                    <p>{cpf}</p>
                </div>
            </div>
            <Link to="/" className="link">
                <button>Voltar para a Home</button>
            </Link>
        </section>

    )

}