import React from "react"
import HomePage from "./HomePage"
import About from "./About.js"
import Header from "./common/Header"
import CoursePage from "./CoursePage"
import {Route, Switch, Redirect} from "react-router-dom"
import NotFoundPage from "./NotFoundPage"
import ManageCoursePage from "./ManageCoursePage"


export default function App(){
    
    return(
        <div className="container-fluid">
            <Header/>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/about" component={About}/>
                <Route path="/courses" component={CoursePage}/>
                <Route path="/course" component={ManageCoursePage}
                <Redirect from="/about-page" to="/about" />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    )
}