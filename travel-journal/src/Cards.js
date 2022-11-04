import react from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function Cards(props) {

    return (
        <div className="card">
            <div className="Cards">
                <div className="image">
                    <img src={props.image} />
                </div>
                <div className="info">
                    <div className="place">
                        <FontAwesomeIcon icon={faLocationDot} className="icon" />
                        <h3>{props.country}</h3>
                        <a href={props.linkMaps} target="_blank" className="linkMaps">View on Google Maps</a>
                    </div>
                    <h2>{props.place}</h2>
                    <p className="dates">{props.beginning} - {props.end}</p>
                    <p className="description">{props.description}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}