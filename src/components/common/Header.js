import React from "react"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"


export default function Header(){

    const activeStyles={color: "orange" }
    return(
        <nav>
            <NavLink activeStyle={activeStyles} exact to="/">Home</NavLink>{" | "}<NavLink activeStyle={activeStyles}to="/courses">Courses</NavLink> | {" "}
            <NavLink activeStyle={activeStyles} to="/about">About</NavLink>
        </nav>
    )
}