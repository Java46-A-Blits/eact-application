import React from "react";
import { coursesService } from "../../config/service-config";
import courseData from '../../config/courseData.json'
import { getRandomCourse } from "../../util/randomCourse";
const AddCourse: React.FC = () =>
{
    // TODO:
    // add "Add course" button to add a random course using 'add' method 
    // of CoursesService (coursesService variable)
     return <button onClick={() => 
     coursesService.add(getRandomCourse(courseData))}>Add Random Course</button>
}
export default AddCourse;