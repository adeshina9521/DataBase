import React from "react";
import {getCourses} from "../api/courseApi"
import CourseList from "./CourseList";


 export default function CoursePage() {
     const [courses, setCourses] = React.useState([])
  
    React.useEffect(function(){
        getCourses().then(data=> setCourses(data))
    },[])
       
        return (
        <>
                <h2>Courses</h2>
                <CourseList 
                    courses={courses}
                    />
        </>
                )
              
}



 



