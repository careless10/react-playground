import React from 'react'
import './card.css'

function CardPlanet(props){
    return (
        <div className="planet-card">
            <img src={props.image} />
        </div>
    )
}

export default CardPlanet
