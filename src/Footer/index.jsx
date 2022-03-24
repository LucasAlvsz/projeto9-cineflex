import "./style.css"

export default function Footer({ title, posterURL, section }) {
    return (
        <footer>
            <div className="movie">
                <img src={posterURL} alt={title} />
            </div>
            <h3>{title}</h3>
            <h3>{section}</h3>
        </footer>
    )
}