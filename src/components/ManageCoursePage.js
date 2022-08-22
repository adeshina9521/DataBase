import React from "react"
// import {Prompt} from "react-router-dom"
import CourseForm from "./CourseForm"
// import * as courseApi from "../api/courseApi"
import courseStore from "../stores/courseStore"
import { toast } from "react-toastify"
import * as courseActions from "../actions/courseAction"


const ManageCoursePage = props => {

    const [errors, setErrors] = React.useState({});
    const [courses, setCourses] = React.useState(courseStore.getCourses())
    const [course, setCourse] = React.useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    })
    React.useEffect(() => {
        courseStore.addChangeListener(onChange);

        const slug = props.match.params.slug; // from the path `/courses/:slug`
        if (course.length === 0){
            courseActions.loadCourses()
        } else if (slug) {
            setCourse(courseStore.getCourseBySlug(slug))
        }
      }, [course.length, props.match.params.slug]);


      function onChange(){
          setCourses(courseStore.getCourses())
      }

    // React.useEffect(() => {
    //     const slug = props.match.params.slug;
    //     if (slug){
    //         courseApi.getCourseBySlug(slug).then(_course => setCourse(_course))
    //     }
    // }, [props.match.params.slug])

    function handleChange({target}){
        setCourse({
            ...course, 
            [target.name]: target.value
        })
    }


    function formIsValid() {
        const newErrors = {};
    
        if (!course.title) newErrors.title = "Title is required";
        if (!course.authorId) newErrors.authorId = "Author ID is required";
        if (!course.category) newErrors.category = "Category is required";
    
        setErrors(newErrors);
        // Form is valid if the errors object has no properties
        return Object.keys(newErrors).length === 0;
      }
      function handleSubmit(event){
        event.preventDefault();
        if (!formIsValid()) return;
        courseActions.saveCourse(course).then(()=> {
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
        {/* <Prompt when={true} message="Are you sure you want to leave this page" /> */}
        {/* {props.match.params.slug} */}
        <CourseForm
            errors={errors}
            course={course}
            onChange={handleChange} 
            onSubmit={handleSubmit}
            />
        </>
    )
} 

export default ManageCoursePage;