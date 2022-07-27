import React from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"


export default function HomePage(){
    return(
        <div className="jumbotron">
            <h1>Plurasight Administraation</h1>
            <p>React, Flux and React Router for ultra-responsive web app</p>
            <Link to="about" className="btn btn-primary">About</Link>
        </div>
    )
}