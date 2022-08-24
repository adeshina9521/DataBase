import React from "react";
// import {getCourses} from "../api/courseApi"
import courseStore from "../stores/courseStore"
import CourseList from "./CourseList";
import {Link} from "react-router-dom"
import {loadCourses, deleteCourse} from "../actions/courseAction"

 export default function CoursePage() {
     const [courses, setCourses] = React.useState(courseStore.getCourses())
  
    React.useEffect(function(){
        courseStore.addChangeListener(onchange)
        if(courseStore.getCourses().length === 0 ) loadCourses()
    },[])
    
    function onchange(){
        setCourses(courseStore.getCourses())

    }
        return (
        <>
                <h2>Courses</h2>
                <Link className="btn btn-primary" to="/course">Add Course </Link>
                <CourseList 
                    courses={courses}
                    deleteCourse={deleteCourse}
                    />
        </>
                )
              
}



 



