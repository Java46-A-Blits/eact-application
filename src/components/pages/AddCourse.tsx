import React from "react";
import courseData from '../../config/courseData.json'
import { getRandomCourse } from "../../util/randomCourse";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addCourse } from "../../redux/actions";
const AddCourse: React.FC = () =>
{
    // TODO:
    // add "Add course" button to add a random course using 'add' method 
    // of CoursesService (coursesService variable)
    const dispatch = useDispatch();

    return <button onClick={() => dispatch(addCourse(getRandomCourse(courseData)))}>Add Random Course</button>
}
export default AddCourse;