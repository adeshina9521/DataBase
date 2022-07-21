import React from "react"
import HomePage from "./HomePage"
import About from "./About.js"
import Header from "./common/Header"
import CoursePage from "./CoursePage"

export default function App(){
    function getPage(){
        const route = window.location.pathname
        if (route === "/about"){
          return  <About/>
        }else if(route === "/courses"){
            return <CoursePage/>
        }
        else {
            return <HomePage/>
        }             
            }
    return(
        <div className="container-fluid">
            <Header/>
            {getPage()}
        </div>
    )
}