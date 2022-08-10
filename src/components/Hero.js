import React from "react";
import "../css/styles.css";

export default function Hero() {
    return (
        <div className="hero-container">
            <img className="hero-img" src="../img/travel_images.jpeg" alt="travel destinations"/>
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </div>
    )
}
