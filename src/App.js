import React from "react";
import "./css/styles.css";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
let module = require('./data.js');
let data = module.data;

export default function App() {
    const experiences = data.map((experience) => {
        return (
            <Card
                key={experience.id}
                experience={experience}
            />
        )
    })
    return (
        <div className="container">
            <NavBar />
            <Hero />
            <section className="cards-container">
                {experiences}
            </section>
        </div>
    )
}
