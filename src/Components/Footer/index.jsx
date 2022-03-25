import "./style.css"

export default function Footer({ title, posterURL, sectionDay, sectionTime }) {
    return (
        <footer>
            <div className="movie">
                <img src={posterURL} alt={title} />
            </div>
            <div className="movie-data">
                <h3>{title}</h3>
                {sectionTime !== undefined ? <h3>{sectionDay} - {sectionTime}</h3> : ""}
            </div>
        </footer>
    )
}