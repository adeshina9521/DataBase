import React from "react";
import {getCourses} from "../api/courseApi"
import CourseList from "./CourseList";
import {Link} from  "react-router-dom"

 export default function CoursePage() {
     const [courses, setCourses] = React.useState([])
  
    React.useEffect(function(){
        getCourses().then(data=> setCourses(data))
    },[])
       
        return (
        <>
                <h2>Courses</h2>
                <Link className="btn btn-primary" to="/course">Add Course </Link>
                <CourseList 
                    courses={courses}
                    />
        </>
                )
              
}



 



