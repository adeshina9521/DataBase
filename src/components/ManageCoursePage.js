import React from "react"
import {Prompt} from "react-router-dom"
import CourseForm from "./CourseForm"


const ManageCoursePage = props => {
    return(
        <>
        <h2>Manage Course Page </h2>
        <Prompt when={true} message="Are you sure you want to leave this page" />
        {/* {props.match.params.slug} */}
        <CourseForm/>
        </>
    )
} 

export default ManageCoursePage;