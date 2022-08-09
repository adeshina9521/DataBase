import React from "react"
import {Prompt} from "react-router-dom"
import CourseForm from "./CourseForm"
import * as CourseApi from "../api/courseApi"
import { toast } from "react-toastify"


const ManageCoursePage = props => {

    const [errors, setErrors] = React.useState({})
    const [course, setCourse] = React.useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    })

    function handleChange({target}){
        const updatedCourse = {...course, 
                            [target.name]: target.value
                        }
        setCourse(updatedCourse)
    }
    function formIsValid(){
        const _errors = {};
        if(!course.title) _errors.title = "Title is Required"
        if(!course.authorId) _errors.authorId = "Author ID is Required"
        if(!course.category) _errors.category = "Category is Required"
        setErrors(_errors)
        return Object.keys(_errors).length === 0
    }

    function handleSubmit(event){
        event.preventDefault();
        if(!formIsValid()) return;
        CourseApi.saveCourse(course).then(()=> {
            props.history.push("/courses");
            toast.success("Course Saved")
        })
    }
    // function handleChange(event){
    //  const {name, value} = event.target
    //     setCourse(function(prevCourse){
    //         return({
    //                 ...prevCourse,
    //                 [name]:value
    //             })
            
    //     })
    // }

    return(
        <>
        <h2>Manage Course Page </h2>
        <Prompt when={true} message="Are you sure you want to leave this page" />
        {/* {props.match.params.slug} */}
        <CourseForm
            errors={errors}
            course={course}
            onChange={handleChange} 
            onSubmit={handleSubmit}/>
        </>
    )
} 

export default ManageCoursePage;