import "./style.css"

export default function Footer({ title, posterURL, sectionDay, sectionTime}) {

    return (
        <footer>
            <div className="movie">
                <img src={posterURL} alt={title} />
            </div>
            <h3>{title}</h3>
            <h3>{sectionDay} - {sectionTime}</h3>
        </footer>
    )
}