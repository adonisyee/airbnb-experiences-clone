import React from "react";
import "../css/styles.css";

export default function Card(props) {
    let badgeText;
    if (props.experience.openSpots===0) {
        badgeText = "SOLD OUT"
    } else if (props.experience.location==="Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card-container">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`../img/${props.experience.img}`} alt="card" className="card-image"/>
            <div className="card-stats">
                <img src="../img/star.png" alt="star" className="card-star"/>
                <span >{props.experience.stats.rating}</span>
                <span className="gray">({props.experience.stats.reviewCount}) - </span>
                <span className="gray">{props.experience.location}</span>
            </div>
            <h1>{props.experience.title}</h1>
            <p><span className="bold">From ${props.experience.price}</span>/person</p>
        </div>
    )
}
