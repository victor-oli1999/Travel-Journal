import react from "react"

export default function Cards(props) {

    return (
        <div className="Cards">
            <div className="image">
                <img src={props.image} />
            </div>
            <div className="info">
                <div className="place">
                    <span>FONT AWESOME AQUI</span>
                    <h3>{props.country}</h3>
                    <a href={props.linkMaps}>View on Google Maps</a>
                </div>
                <h2>{props.country}</h2>
                <p className="dates">{props.beginning} - {props.end}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}