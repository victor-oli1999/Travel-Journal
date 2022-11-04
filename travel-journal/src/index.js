import react from "react"
import ReactDOM from "react-dom"
import styles from "./styles.css"
import data from "./Data"
import Nav from "./Nav"
import Cards from "./Cards"

function Index() {
    const cards = data.map(props => {
        return <Cards 
            country={props.country}
            linkMaps={props.linkMaps}
            place={props.place}
            beginning={props.dates.beginning}
            end={props.dates.end}
            description={props.description}
            image={props.image}
        />
    })
    return (
        <div className="corpo">
            <Nav />
            {cards}
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById("root"))