import React from "react";
import {getCourses} from "../api/courseApi.js"

 export default function CoursePage() {
     const [courses, setCourses] = React.useState([])
  
    React.useEffect(function(){
        getCourses().then(data=> setCourses(data))
    },[])
       
        return (
        <>
                <h2>Courses</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Tittle</th>
                            <th>Author ID</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                            {courses.map(course =>{
                            return (

                                 <tr key={course.id}>
                                    <td>{course.title}</td>
                                    <td>{course.authorId}</td>
                                    <td>{course.category}</td>
                                </tr>
                                )
                        })}
                    </tbody>
                </table>
                </>
                )
              
}



 



