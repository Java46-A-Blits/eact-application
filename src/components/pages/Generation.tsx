import React, { useEffect } from "react";
import { coursesService } from "../../config/service-config";
import { getRandomCourse } from "../../util/randomCourse";
import courseData from "../../config/courseData.json";
import { range } from "../../util/functions";
import { useDispatch } from "react-redux";
import { addCourse } from "../../redux/actions";
 
const INPUT_GENERATION_ID = "input-generation-id";
let inputElement: any;
const Generation: React.FC = () =>
{
    // TODO:
    // Add an option to eneter a number of the courses to be randomly generated
    // and added to the courses array by using 'add' function of 'coursesService'
    const dispatch = useDispatch();
    function onInput() {
       const nCourses: number = +inputElement.value;
       range(0, nCourses).forEach(i => dispatch(addCourse(getRandomCourse(courseData))))
    }
    useEffect(() => {
        inputElement = document.getElementById(INPUT_GENERATION_ID);
    }, [])
    return <div>
        <input id={INPUT_GENERATION_ID} type="number"/>
        <button onClick={onInput}>generate</button>
    </div>
}
export default Generation;