import React from "react"
import {Prompt} from "react-router-dom"
import CourseForm from "./CourseForm"


const ManageCoursePage = props => {

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
            course={course}
            onChange={handleChange}/>
        </>
    )
} 

export default ManageCoursePage;