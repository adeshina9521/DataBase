import React from "react"
import HomePage from "./HomePage"
import About from "./About.js"
import Header from "./common/Header"
import CoursePage from "./CoursePage"
import {Route} from "react-router-dom"


export default function App(){
    
    return(
        <div className="container-fluid">
            <Header/>
            <Route path="/" exact component={HomePage}/>
            <Route path="/about" component={About}/>
            <Route path="/courses" component={CoursePage}/>
        </div>
    )
}