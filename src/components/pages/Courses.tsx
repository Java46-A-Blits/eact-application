import React from "react";
import { coursesService } from "../../config/service-config";
import { useSelector } from "react-redux";
import { StateType } from "../../redux/store";
import { Course } from "../../models/Course";
const Courses: React.FC = () =>
{
    //TODO:
    // using method 'get' of coursesService return <ul> 
    // with courses listed as <li> items to contain JSON for each single course

    const courses: Course[] = useSelector<StateType, Course[]>(state => state.courses);
    
    return <ul>
        {courses.map(c => <li key={c.id}>{JSON.stringify(c)}</li>)}
    </ul>
}
export default Courses;