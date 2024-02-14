import React from "react";
import courseData from '../../config/courseData.json'
import { getRandomCourse } from "../../util/randomCourse";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addCourse } from "../../redux/actions";
import { Course } from "../../models/Course";
import CourseForm from "../forms/CourseForm";
const AddCourse: React.FC = () =>{
    // TODO:
    // add "Add course" button to add a random course using 'add' method 
    // of CoursesService (coursesService variable)
    const dispatch = useDispatch<any>();
    function onSubmit(course: Course){
        dispatch(addCourse(course));
    }
    return <CourseForm submitFn={onSubmit}></CourseForm>
}
export default AddCourse;