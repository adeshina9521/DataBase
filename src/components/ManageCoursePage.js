import React from "react"
import {Prompt} from "react-router-dom"

const ManageCoursePage = props => {
    return(
        <>
        <h2>Manage Course Page </h2>
        <Prompt when={true} message="Are you sure you want to leave this page" />
        {props.match.params.slug}
        </>
    )
} 

export default ManageCoursePage;